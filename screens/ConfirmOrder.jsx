import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItems } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'



const ConfirmOrder = () => {

    const navigate = useNavigation();

    const itemsPrice = 50000;
    const shippingCharges = 200;
    const tax = 0.18 * itemsPrice;
    const totalAmount = itemsPrice + shippingCharges + tax;


    return (
        <View style={{ ...defaultStyle }}>
            {/* header */}
            <Header back={true} />
            {/* heading */}
            <Heading text1='Confirm' text2='Order' containerStyle={{ paddingTop: 70 }} />
            <View
                style={{
                    paddingVertical: 20,
                    flex: 1
                }}
            >
                <ScrollView>
                    {
                        cartItems.map((item, index) => (
                            <ConfirmOrderItem
                                key={item.product}
                                image={item.image}
                                name={item.name}
                                quantity={item.quantity}
                            />
                        ))
                    }
                </ScrollView>
            </View>


            <PriceTag heading={"Subtotal"} value={itemsPrice} />
            <PriceTag heading={"Shipping Charges"} value={shippingCharges} />
            <PriceTag heading={"Tax"} value={tax} />
            <PriceTag heading={"Total amount"} value={totalAmount} />


            <TouchableOpacity
                onPress={() => navigate.navigate("payment",
                    {
                        itemsPrice, shippingCharges, tax, totalAmount
                    })
                }
            >
                <Button
                    style={{
                        backgroundColor:colors.color3,
                        borderRadius:100,
                        padding:5,
                        margin:10
                    }}
                    textColor={colors.color2}
                    icon={'chevron-right'}
                >Payment</Button>
            </TouchableOpacity>
            
        </View>
    )
}


const PriceTag = ({ heading, value }) => (
    <View
        style={{

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5
        }}
    >
        <Text style={{ fontWeight: "900" }}>{heading}</Text>
        <Text>₹{value}</Text>
    </View>
)


export default ConfirmOrder