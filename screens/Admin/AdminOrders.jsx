import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import {defaultStyle} from '../../styles/style'
import { colors } from '../../styles/style'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import OrderItem from '../../components/OrderItem'
import Heading from '../../components/Heading'
import { order } from '../Orders'



const AdminOrders = () => {

    const loading=false;
    const processOrderLoading=false;
    
    const updateHandler=()=>{

    }



  return (
    <View style={{
        ...defaultStyle,
        backgroundColor:colors.color5
    }}>
        <Header back={true}/>

        <View style={{ marginBottom: 20,paddingTop:70 }}>
            <Text style={styles.heading}>All Orders</Text>
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
                                    order.length > 0 ? order.map((item, index) => (
                                        <OrderItem
                                            key={item._id}
                                            id={item._id}
                                            index={index}
                                            price={item.totalAmount}
                                            status={item.orderStatus}
                                            paymentMethod={item.paymentMethod}
                                            orderedOn={item.createdAt.split("T")[0]}
                                            address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                                            admin={true}
                                            updateHandler={updateHandler}
                                            loading={processOrderLoading}
                                        />
                                    )) : (
                                        <Heading style={{ textAlign: "center" }}>No Orders Yet</Heading>
                                    )
                                }
                            </ScrollView>

                        </View>
                    </>
                )
            }

      {/* <Text>AdminOrders</Text> */}
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

export default AdminOrders