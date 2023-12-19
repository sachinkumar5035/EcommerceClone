import {  TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { CLEAR_CART } from '../redux/constants/cartConstant'


const Header = ({ back, emptyCart = false }) => {

    const navigate = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();


    const emptyCartHandler = () => {
        // console.log("empty cart handler");
        
        dispatch({
            type:CLEAR_CART
        })

    }

    return (
        <>
            {
                back && <TouchableOpacity style={{
                    position: "absolute",
                    left: 20,
                    top: 20,
                    zIndex: 10
                }}
                    onPress={() => navigate.goBack()}

                >
                    <Avatar.Icon
                        style={{
                            backgroundColor: colors.color4,
                        }}
                        icon={"arrow-left"}
                        color={
                            route.name === "productdetails" ? colors.color2 : colors.color3
                        }
                    />
                </TouchableOpacity>
            }
            {
                <TouchableOpacity style={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                    zIndex: 10
                }}
                    onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}

                >
                    <Avatar.Icon style={{
                        backgroundColor: colors.color4,
                    }}
                        icon={emptyCart ? "delete-outline" : "cart-outline"}
                        color={route.name === "productdetails" ? colors.color2 : colors.color3}
                    />
                </TouchableOpacity>
            }

        </>
    )
}

export default Header



