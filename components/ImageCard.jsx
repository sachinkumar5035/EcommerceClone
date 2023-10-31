import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar } from 'react-native-paper'

const ImageCard = ({ src, id, deleteHandler }) => { // these arguments we are passing from ProductImages Page

    // console.log(id);
    // console.log(src);

    return (
        <View
            style={styles.container}
        >
            <Image
                source={{
                    uri: src
                }}
                style={{
                    height: "80%",
                    width: "80%",
                    resizeMode: "contain"
                }}
            />
            <TouchableOpacity
                onPress={() => deleteHandler(id)} // id is the id of the image, this id will send to deleteHandler of product image page
            >
                <Avatar.Icon
                    icon={'delete'}
                    size={30}
                    style={{
                        backgroundColor: colors.color1
                    }}
                />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        height: 300
    }
})



export default ImageCard