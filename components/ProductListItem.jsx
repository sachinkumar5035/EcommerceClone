import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/style'
import MyModal from './MyModal';

const ProductListItem = ({
    id,
    navigate,
    deleteHandler,
    index,
    price,
    stock,
    name,
    category,
    imgSrc
}) => {

    const [openModal,setOpenModal]=useState(false);


    return (
        <>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigate.navigate('productdetails', { id })}
                onLongPress={()=>setOpenModal((prev)=>!prev)}
            >

                <View
                    style={{
                        ...styles.container,
                        backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3
                    }}
                >
                    <Image
                        source={{
                            uri: imgSrc
                        }}
                        style={{
                            height: 40,
                            width: 40,
                            resizeMode: 'contain'
                        }}
                    />

                    <Text 
                        style={{
                            color: colors.color2,
                            width: 60
                        }}
                        numberOfLines={1}
                    >
                        ₹{price}
                    </Text>

                    <Text 
                        style={{
                            color: colors.color2,
                            maxWidth: 120
                        }}
                        numberOfLines={1}
                    >
                        {name}
                    </Text>

                    <Text 
                        style={{
                            color: colors.color2,
                            width: 60
                        }}
                        numberOfLines={1}
                    >
                        {category}
                    </Text>
                    
                    <Text 
                        style={{
                            color: colors.color2,
                            width: 40
                        }}
                        numberOfLines={1}
                    >
                        {stock}
                    </Text>
                </View>
            </TouchableOpacity>

{
    openModal && (
        <MyModal id={id}  deleteHandler={deleteHandler} navigate={navigate} setOpenModal={setOpenModal}/>
    )
}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
    }

})



export default ProductListItem