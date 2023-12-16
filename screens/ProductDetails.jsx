import { View, Text, Dimensions, TouchableOpacity,Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { colors, defaultStyle } from '../styles/style';
import Header from '../components/Header';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getProductDetails } from '../redux/action/productAction';
import { ADD_TO_CART } from '../redux/constants/cartConstant';



const ProductDetails = ({ route: { params } }) => {

    // console.log("@@@ product details page ",params.id); // product id 
    const isCarousel = useRef(null);
    // const name = "Macbook Pro M2";
    // const price = "12000";
    // const description = "The random string generator creates 
    // a sequence of letters, numbers, and special characters in m
    // any output formats. The random strings can be easily copied. This free 
    // tool can generate up to ten thousand random strings where every string is a maximum of 100 characters in length."

    const [quantity, setQuantity] = useState(1);
    // const stock=10;
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const { product: {
        name,
        price,
        stock,
        description,
        images
    } } = useSelector((state) => state.product); // this product is available in product state of otherReducer

    // console.log("@@@images", images);

    useEffect(() => {
        dispatch(getProductDetails(params.id));
    }, [dispatch, params.id, isFocused])

    // console.log("@@@ product ",product);

    const secondaryImages = [
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

    const incrementQty = () => {
        if (quantity >= stock) {
            return
        }
        setQuantity((prev) => prev + 1);
    }
    const decrementQty = () => {
        if (quantity <= 1) return 
        setQuantity((prev) => prev - 1);
    }

    const addToCartHandler = () => {
        if(stock===0)
        return Toast.show({
                    type:'error',
                    text1:"Product is out of stock"
                })

    dispatch({
      type:ADD_TO_CART,
      payload:{
        product:params.id, // 
        name,
        price,
        image: images?images[0].url:secondaryImages[0].url,
        stock,
        quantity
      }  
    });
    Toast.show({
        type:'success',
        text1:"Added to cart"
    })
    }

    const imagePressHandler = () => {

    }

    return (
        <View>
            <Header back={true} />
            <SliderBox
                style={{
                    height: 300
                }}
                images={images?images.map((item, index) => item.url):secondaryImages.map((item,index)=>item.url)}
                // images={images.url}
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
                    numberOfLines={10}
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
                        margin: 15,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: colors.color3,
                            fontWeight: "100"
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
                                    backgroundColor: colors.color5,
                                    height: 25,
                                    width: 25,
                                    borderRadius: 5
                                }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                backgroundColor: colors.color4,
                                height: 25,
                                width: 25,
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: colors.color5
                            }}
                        >
                            {quantity}
                        </Text>

                        <TouchableOpacity onPress={incrementQty}>
                            <Avatar.Icon
                                icon={"plus"}
                                size={25}
                                style={{
                                    backgroundColor: colors.color5,
                                    height: 25,
                                    width: 25,
                                    borderRadius: 5
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={.8} onPress={addToCartHandler}>
                    <Button
                        icon={'cart'}
                        textColor='white'
                        style={{
                            backgroundColor: colors.color1,
                            borderRadius: 100,
                            padding: 5,
                            marginVertical: 35,
                        }}>Add to cart</Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default ProductDetails