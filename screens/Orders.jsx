import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { defaultStyle, colors } from '../styles/style'
import Loader from '../components/Loader'
import OrderItem from '../components/OrderItem'
import { useGetOrders } from '../utils/customHooks'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../redux/action/orderAction'


const Orders = () => {
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const {orders,loading} = useSelector((state)=>state.orders);
    // console.log(orders[0],orders.length);

    
    useEffect(() => {
        dispatch(getOrder());
    }, []) // as we are passing dependency array as empty it will be executed at once only
    
    return (
        <View
            style={{
                ...defaultStyle,
                backgroundColor: colors.color5
            }}
        >
            {/* header */}
            <Header back={true} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Orders</Text>
            </View>

            {
                loading ? (<Loader />) : (
                    <>
                        <View
                            style={{
                                padding: 20,
                                flex: 1
                            }}
                        >

                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    orders.length > 0 ? (
                                        orders.map((item, index) => (
                                            <OrderItem
                                                key={item._id}
                                                id={item._id}
                                                index={index}
                                                price={item.totalAmount}
                                                status={item.orderStatus}
                                                paymentMethod={item.paymentMethod}
                                                orderedOn={item.placedOn.split("T")[0]}
                                                address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                                            // admin={true}
                                            />
                                        ))
                                    ) : (
                                       <Text style={{textAlign:"center",fontWeight:"800"}}>
                                            No Orders Yet
                                       </Text>
                                    )
                                }
                            </ScrollView>

                        </View>
                    </>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5,
    }
})

export default Orders