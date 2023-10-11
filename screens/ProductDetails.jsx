import { View, Text } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';


const ProductDetails = ({route:{params}}) => {
    console.log(params.id);
  return (
    <View 
    style={{
        ...defaultStyle,
        padding:0,
        backgroundColor:colors.color1
    }}>
        <Header back={true}/>
        {/* Carousel */}
        <Carousel/>
        
      <Text>ProductDetails</Text>
    </View>
  )
}

export default ProductDetails