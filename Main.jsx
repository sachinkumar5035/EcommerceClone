// import { View, Text, SafeAreaView,StatusBar,Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';






const Stack = createNativeStackNavigator(); 



const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Group >
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="login" component={Login}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main