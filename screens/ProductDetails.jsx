import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyle } from '../styles/style';
import Header from '../components/Header';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar } from 'react-native-paper';

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {

    const isCarousel = useRef(null);
    const name = "Macbook pro m2";
    const price = "12000";
    const description = "The random string generator creates a sequence of letters, numbers, and special characters in many output formats. The random strings can be easily copied. This free tool can generate up to ten thousand random strings where every string is a maximum of 100 characters in length."
    const [quantity,setQuantity]=useState(1);
    const stock=10;


    const images = [
        {
            id: "kjaslkjdal",
            url: "https://media.istockphoto.com/id/1292435524/photo/mother-and-daughter-having-fun-at-the-park.jpg?s=1024x1024&w=is&k=20&c=6ABG03wtRrRtUXumZjlRG8OYlwOuLgb1rPYdIXPouyU="
        },
        {
            id: "kjasljdal",
            url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: "kjasaskjdal",
            url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: "kjasalksjdal",
            url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ];

    // console.log(params.id);

    const incrementQty = ()=>{
        if(quantity>=stock) return
        setQuantity((prev)=>prev+1);
    }
    const decrementQty = ()=>{
        if(quantity<=1) return
        setQuantity((prev)=>prev-1);
    }

    return (
        <View>
            <Header back={true} />
            <SliderBox
                style={{
                    height: 300
                }}
                images={images.map((item, index) => item.url)}
                dotColor="red"
                imageLoadingColor="black"
                autoplay={true}
                autoplayInterval={3000}
                circleLoop={true}
                onCurrentImagePressed={() => imagePressHandler}
            />

            <View
                style={{
                    padding: 10
                }}
            >


                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 25,
                    }}
                >
                    {name}
                </Text>

                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 18,
                        padding: 10,
                        fontWeight: "900"
                    }}
                >
                    ₹{price}
                </Text>

                <Text
                    numberOfLines={8}
                    style={{
                        letterSpacing: 1,
                        fontSize: 18,
                        lineHeight: 20,
                        marginVertical: 15
                    }}
                >
                    {description}
                </Text>

                <View
                    style={{
                        margin:15,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: colors.color3,
                            fontWeight: "90"
                        }}

                    >
                        {"Quantity"}
                    </Text>

                    <View
                        style={{
                            width: 80,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >

                        <TouchableOpacity onPress={decrementQty}>
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
                            {quantity}
                        </Text>

                        <TouchableOpacity onPress={incrementQty}>
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

            </View>
        </View>
    )
}

export default ProductDetails