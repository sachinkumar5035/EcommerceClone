import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'

const MyModal = ({ id, deleteHandler, navigate, setOpenModal }) => {




    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
                onPress={() => setOpenModal(false)}
            >
                <Avatar.Icon icon={'close'} size={25} style={{ backgroundColor: colors.color1 }} />
            </TouchableOpacity>
            
            <Text 
                style={
                    styles.text
                }
            onPress={()=>navigate.navigate('updateproduct',{id})} // update product passing the ID of the product 
            >
                EDIT
            </Text>
            
            <Button
                textColor={colors.color1}
                onPress={()=>deleteHandler(id)}
            >
                Delete
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation:10,
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 20,
        borderRadius: 10
    },
    text:{
       fontWeight:"900",
       textAlign:"center",
       textTransform:"uppercase" 
    }

})



export default MyModal