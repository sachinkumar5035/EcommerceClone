import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../redux/action/otherAction'
import { useMessageAndErrorOther } from '../utils/customHooks'
import { CLEAR_CART } from '../redux/constants/cartConstant'
import {useStripe} from '@stripe/stripe-react-native'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { server } from '../redux/store'
import Loader from '../components/Loader'


const Payment = ({ navigation, route }) => {

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [loaderLoading,setLoaderLoading] = useState(false);
    // console.log(paymentMethod);
    const dispatch = useDispatch();
    const stripe = useStripe();
    const {user,isAuthenticated} = useSelector((state)=>state.user);
    const {cartItems} = useSelector((state)=>state.cart);
    // const isAuthenticated=true;
    
    const redirectToLogin=()=>{
        navigation.navigate("login");
    }

    const codHandler=(paymentInfo)=>{
        const shippingInfo = {
            address:user.address,
            city:user.city,
            state:user.state,
            country:user.country,
            pinCode:user.pinCode
        }
        const itemsPrice = route.params.itemsPrice;
        const shippingCharges = route.params.shippingCharges;
        const taxPrice = route.params.tax;
        const totalAmount = route.params.totalAmount;
        dispatch(placeOrder(cartItems,shippingInfo,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount,paymentInfo));
    }

    const onlineHandler = async()=>{
        try {
            const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
            const {data:{client_secret}} = await axios.post(`${server}/order/payment`,{totalAmount:route.params.totalAmount},config);
            const init = await stripe.initPaymentSheet({
                paymentIntentClientSecret:client_secret,
                merchantDisplayName:"KumarShop"});
            
                if(init.error){
                    return Toast.show({
                        type:"error",
                        text1:"Some Stripe error",
                        text2:init.error.message
                    })
                }
            const presentSheet = await stripe.presentPaymentSheet();
            setLoaderLoading(true);
            if(presentSheet.error){
                setLoaderLoading(false);
                return Toast.show({
                    type:"error",
                    text1:"Some presentSheet error",
                    text2:presentSheet.error.message
                })
            }

            const {paymentIntent} = await stripe.retrievePaymentIntent(client_secret);

            if(paymentIntent.status==='Succeeded'){
                codHandler({id:paymentIntent.id,status:paymentIntent.status});
            }


        } catch (error) {
            return Toast.show({
                type:"error",
                text1:"Internal server error",
                text2:error
            })
        }
    }

    const loading = useMessageAndErrorOther(dispatch,navigation,"profile",()=>({type:CLEAR_CART}));

    return (
        loaderLoading?(<Loader/>):(
            <View style={{ ...defaultStyle }}>
            {/* header */}
            <Header back={true} />

            {/* heading  */}
            <Heading text1='Payment' text2='Method' containerStyle={{ paddingTop: 70 }} />


            <View style={styles.container}>

                <RadioButton.Group
                    onValueChange={setPaymentMethod}
                    value={paymentMethod}
                >
                    <View style={styles.radioStyle}>
                        <Text style={styles.radioStyleText}>Cash on Delivery</Text>
                        <RadioButton color={colors.color1} value={"COD"} />
                    </View>
                    <View style={styles.radioStyle}>
                        <Text style={styles.radioStyleText}>Online</Text>
                        <RadioButton color={colors.color1} value={"ONLINE"} />
                    </View>
                </RadioButton.Group>
            </View>

            <TouchableOpacity
                disabled={loading}
                onPress={
                    !isAuthenticated?redirectToLogin:paymentMethod==="COD"?()=>codHandler():onlineHandler
                }
            
            >
                <Button
                    loading={loading}
                    disabled={loading}
                    style={styles.btn}
                    textColor={colors.color2}
                    icon={paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"}
                >
                    {
                        paymentMethod === "COD" ? "Place Order" : "Pay"
                    }
                </Button>
            </TouchableOpacity>
        </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: "center"
    },
    radioStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5
    },
    radioStyleText: {
        fontWeight: "600",
        fontSize: 18,
        textTransform: "uppercase",
        color: colors.color2
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        margin: 10
    }
})


export default Payment