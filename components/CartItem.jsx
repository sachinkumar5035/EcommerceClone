import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar } from 'react-native-paper'

const CartItem = ({
    id,
    name,
    stock,
    price,
    imgSrc,
    index,
    qty,
    incrementHandler,
    decrementHandler,
    navigate
}) => {
    // console.log( id,
    //     name,
    //     stock,
    //     price,
    //     imgSrc,
    //     qty);


    return (
        <View
            style={{
                flexDirection: "row",
                height:100,
                marginVertical:20
            }}
        >
            <View 
            style={{
                width:"40%",
                backgroundColor:index%2==0?colors.color1:colors.color3,
                borderTopRightRadius:100,
                borderBottomRightRadius:100
            }}
            >
                <Image 
                source={{uri:imgSrc}}
                    style={{
                        width:200,
                        height:"100%",
                        resizeMode:"contain",
                        top:"-20%",
                        left:"10%"
                    }}
                />
            </View>
            <View
                style={{
                    width:"40%",
                    paddingHorizontal:25
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize:18
                    }}
                    onPress={()=>navigate.navigate("productdetails",{id})}
                >
                    {name}
                </Text>

                <Text
                    numberOfLines={1}
                    style={{
                        fontSize:18,
                        fontWeight:"900"
                    }}
                >
                    ₹{price}
                </Text>
            </View>
            
            <View
                style={{
                    alignItems:"center",
                    width:"20%",
                    height:80,
                    justifyContent:'space-between',
                    alignSelf:"center"
                }}
            >
                <TouchableOpacity onPress={()=>decrementHandler(id,name,price,imgSrc,stock,qty)}>
                            <Avatar.Icon 
                            icon={"minus"} 
                            size={25} 
                            style={{
                                backgroundColor:colors.color5,
                                height:25,
                                width:25,
                                borderRadius:5
                            }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                backgroundColor:colors.color4,
                                height:25,
                                width:25,
                                textAlignVertical:'center',
                                textAlign:'center',
                                borderWidth:1,
                                borderRadius:5,
                                borderColor:colors.color5
                            }}
                        >
                            {qty}
                        </Text>

                        <TouchableOpacity onPress={()=>incrementHandler(id,name,price,imgSrc,stock,qty)}>
                            <Avatar.Icon 
                            icon={"plus"} 
                            size={25} 
                            style={{
                                backgroundColor:colors.color5,
                                height:25,
                                width:25,
                                borderRadius:5
                            }}
                            />
                        </TouchableOpacity>
            </View>

        </View>
    )
}

export default CartItem