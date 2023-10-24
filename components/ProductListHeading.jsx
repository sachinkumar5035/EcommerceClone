import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'

const ProductListHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={{...styles.text,width:null,maxWidth:120}}>Name</Text>
      <Text style={{...styles.text,width:60}}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        borderRadius:5,
        padding:10
    },
    text:{
        width:40,
        fontWeight:'900',
        color:colors.color2
    }
})




export default ProductListHeading