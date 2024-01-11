import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../redux/constants/cartConstant'

const Cart = () => {

    const navigate = useNavigation();
    const dispatch=useDispatch();

    const {cartItems} = useSelector((state)=>state.cart); // we have created a store with name cart 
    // console.log(cartItems);
    const incrementHandler=(id,name,price,image,stock,quantity)=>{
        const newQuantity = quantity+1;
        if(stock <= quantity){
            return Toast.show({
                type:"error",
                text1:"Maximum Value Added"
            });
        }
        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:id,
                name:name,
                price:price,
                image:image,
                stock:stock,
                quantity:newQuantity
            }
        })
    }
    
    const decrementHandler=(id,name,price,image,stock,quantity)=>{
        const newqty = quantity-1;
        if(quantity<=1){
            return  dispatch({
                type:REMOVE_FROM_CART,
                payload:{
                    id:id
                }
            })
        }
        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:id,
                name:name,
                price:price,
                image:image,
                stock:stock,
                quantity:newqty
            }
        })
    }
    

    return (
        <View style={{
            ...defaultStyle,
            padding: 0
        }}>

            {/* Header */}
            <Header back={true} emptyCart={true} />

            {/* Heading */}
            <Heading text1='Shopping' text2='Cart' containerStyle={{ paddingTop: 70, marginLeft: 35 }} />

            <View
                style={{
                    paddingVertical: 20,
                    flex: 1
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItems.length>0?cartItems.map((item,index)=>(
                            <CartItem 
                            navigate={navigate}
                            key={item.product} 
                            id={item.product} 
                            name={item.name} 
                            stock={item.stock}
                            price={item.price}
                            imgSrc={item.image}
                            index={index}
                            qty={item.quantity}
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                        />
                        )):(
                            <Text style={{
                                textAlign:'center',
                                fontSize:18,
                                fontWeight:"500"
                            }}>
                                No Items Yet
                            </Text>
                        )
                    }
                </ScrollView>
                
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 35
                }}
            >
                <Text>{cartItems.length} Items</Text>
                <Text>₹{cartItems.reduce((prev,curr)=>prev+curr.quantity*curr.price,0)}</Text>
            </View>
            <TouchableOpacity onPress={cartItems.length>0?()=>navigate.navigate("confirmorder"):null}>
                <Button icon={'cart'}
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}
                    textColor={colors.color2}
                >
                    Check Out
                </Button>
            </TouchableOpacity>
        </View>
    )
}

export default Cart