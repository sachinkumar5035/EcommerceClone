import { View, Text, Image } from 'react-native'
import React from 'react'

const ConfirmOrderItem = ({ image, name, quantity, price }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10
            }}
        >
            <Image
                source={{ uri: image }}
                style={{
                    height: 50,
                    width: 50,
                    resizeMode: "contain"
                }}
            />
            <Text>{name}</Text>
            <View style={{flexDirection:"row"}}>
            <Text>{quantity}</Text>
            <Text style={{marginHorizontal:5}}>{"x"}</Text>
            <Text>₹{price}</Text>
            </View>
        </View>
    )
}

export default ConfirmOrderItem