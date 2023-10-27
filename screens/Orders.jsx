import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { defaultStyle, colors } from '../styles/style'
import Loader from '../components/Loader'
import Heading from '../components/Heading'
import OrderItem from '../components/OrderItem'

export const order = [
    {
        _id: "kljas1kdjla;s",
        shippingInfo: {
            address: "103 t3 devaan",
            city: "Gurugram",
            country: "INDIA",
            pinCode: "122004"
        },
        createdAt: "12-1-2023T1276",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 2190932
    },
    {
        _id: "asas2ada;s",
        shippingInfo: {
            address: "103 t3 devaan",
            city: "Gurugram",
            country: "INDIA",
            pinCode: "122004"
        },
        createdAt: "12-1-2023T1276",
        orderStatus: "Processing",
        paymentMethod: "ONLINE",
        totalAmount: 12312
    },
    {
        _id: "a23sdas;s",
        shippingInfo: {
            address: "103 t3 devaan",
            city: "Gurugram",
            country: "INDIA",
            pinCode: "122004"
        },
        createdAt: "12-1-2023T1276",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 123131
    },
    {
        _id: "asdasd4a;s",
        shippingInfo: {
            address: "103 t3 devaan",
            city: "Gurugram",
            country: "INDIA",
            pinCode: "122004"
        },
        createdAt: "12-1-2023T1276",
        orderStatus: "Processing",
        paymentMethod: "ONLINE",
        totalAmount: 12312
    },
];


const Orders = () => {

    const loading = false;


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
                                            // admin={true}
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