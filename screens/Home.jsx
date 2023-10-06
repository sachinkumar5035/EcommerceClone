import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle } from '../styles/style'

const Home = () => {
  return (
    <View style={defaultStyle}>
      
    {/* header  */}

    <View>
      <Text style={{fontSize:25}}>Our</Text>
      <Text style={{fontSize:25,fontWeight:"900"}}>Products</Text>
    </View>

    </View>
  )
}

export default Home