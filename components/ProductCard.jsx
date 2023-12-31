import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Button } from 'react-native-paper'

const ProductCard = ({ stock, price, image, name, id, addToCartHandler, i, navigate,description }) => {

    const navigationHandler = ()=>{
        // console.log("Product card ",id);
       navigate.navigate("productdetails", { id:id });
    }

    // console.log("stock of product ",stock);
    return (

        <TouchableOpacity 
            activeOpacity={1}
            onPress={navigationHandler}
        >
            <View 
                style={{
                    elevation: 5,
                    alignItems:"center",
                    justifyContent:"space-between",
                    margin:20,
                    height:500,
                    width:300,
                    borderRadius: 20,
                    backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2
                }}
            >
                <Image
                    source={{
                        uri: image
                    }}
                    style={{
                        width:200,
                        height: 200,
                        position:"absolute",
                        resizeMode:"contain",
                        top:105
                    }}
                />
                
                    <View style={{
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Text
                            numberOfLines={2}
                            style={{
                                color: i % 2 == 0 ? colors.color2 : colors.color1,
                                fontSize: 25,
                                fontWeight: "300",
                                width:"60%"
                            }}
                        >
                            {name}
                        </Text>

                        <Text
                            numberOfLines={2}
                            style={{
                                color: i % 2 == 0 ? colors.color2 : colors.color1,
                                fontSize: 20,
                                fontWeight: "700"
                            }}
                        >
                            ₹{price}
                        </Text>
                        
                    </View>

                        <Text
                            numberOfLines={4}
                            style={{
                                padding:10,
                               top:100,
                                color: i % 2 == 0 ? colors.color2 : colors.color1,
                                fontSize: 20,
                                fontWeight: "300"
                            }}
                            
                        >
                            {description}
                        </Text>


                    <TouchableOpacity style={{
                        backgroundColor:i%2==0?colors.color2:colors.color1,
                        borderRadius:0,
                        borderBottomRightRadius:20,
                        borderBottomLeftRadius:20,
                        width:"100%"
                    }}>
                        <Button onPress={()=>addToCartHandler(id,name,price,image,stock)} textColor={i%2==0?colors.color1:colors.color2}>
                            Add to Cart
                        </Button>
                    </TouchableOpacity>
            </View>
        </TouchableOpacity>
        
    )
}

export default ProductCard