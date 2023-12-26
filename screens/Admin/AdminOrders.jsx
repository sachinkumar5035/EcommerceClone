import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import {defaultStyle} from '../../styles/style'
import { colors } from '../../styles/style'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import OrderItem from '../../components/OrderItem'
import Heading from '../../components/Heading'
import { getAdminOrder, getOrder1 } from '../../redux/action/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { useMessageAndError, useMessageAndErrorOther } from '../../utils/customHooks'



const AdminOrders = ({navigation}) => {
    const dispatch = useDispatch();
    const {orders,loading} = useSelector((state)=>state.orders); // store for orders is orders 
   
    // const loading=false;
    const processOrderLoading=useMessageAndErrorOther(dispatch,navigation,"adminpanel",);

    const updateHandler=(id)=>{
        console.log(id);
    }


    useEffect(() => {
        dispatch(getOrder1());
      }, [])


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
                                    orders.length > 0 ? orders.map((item, index) => (
                                        <OrderItem
                                            key={item._id}
                                            id={item._id}
                                            index={index}
                                            price={item.totalAmount}
                                            status={item.orderStatus}
                                            paymentMethod={item.paymentMethod}
                                            orderedOn={item.placedOn.split("T")[0]}
                                            address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                                            admin={true}
                                            updateHandler={updateHandler}
                                            loading={processOrderLoading}
                                        />
                                    )) : (
                                        // <Heading style={{ textAlign: "center" }}>No Orders Yet</Heading>
                                        <Text style={{textAlign:'center',fontWeight:"800"}}>No orders Yet</Text>
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