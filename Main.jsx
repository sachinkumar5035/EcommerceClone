import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false,}}>
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
