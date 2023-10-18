import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import Signup from './screens/Signup';



const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false,}}>
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name='signup' component={Signup}/>
          {/* Password resetting route */}
          <Stack.Screen name='forgetpassword' component={ForgetPassword}/>
          <Stack.Screen name='verify' component={Verify}/>
          


        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
