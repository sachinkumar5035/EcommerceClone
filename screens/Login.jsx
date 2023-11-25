import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/style';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action/userAction';
import Toast from 'react-native-toast-message';
import { CLEAR_ERROR, CLEAR_MESSAGE } from '../redux/constants/userConstants';


const inputOptions={
    style:inputStyling,
    mode:'outlined',
    activeOutlineColor:colors.color1
}


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {loading,error,message,isAuthenticated} = useSelector((state)=>state.user);   

    // console.log("@@@loading ",loading, "@@@error ",error,"@@@message ",message,"@@@isAuthenticated",isAuthenticated);

    const submitHandler = ()=>{
        dispatch(login("sachinkumar5035@gmail.com","password123@"));
    }

    useEffect(() => {
      if(error){
        Toast.show({
            type:"error",
            text1:error
        })
        dispatch({
            type:CLEAR_ERROR
        })
      }
      else if(message){
            Toast.show({
                type:"success",
                text1:message
            })
            dispatch({
                type:CLEAR_MESSAGE
            })
      }
    }, [error,message,dispatch])
    

    return (
        <>
        <View style={{...defaultStyle,backgroundColor:colors.color2}} >
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.heading}>Login</Text>
            </View>

            <View style={styles.container}>
                <TextInput 
                    {...inputOptions}
                    placeholder='Email'
                    value={email}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
                 <TextInput 
                    {...inputOptions}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress={()=>navigation.navigate("forgetpassword")}
                >
                    <Text style={styles.forgetPasswordText}>Forget Password</Text>
                </TouchableOpacity>

                <Button 
                    loading={loading}
                    textColor={colors.color2} 
                    style={styles.btnLogin}
                    // disabled={email==="" || password===""}
                    onPress={submitHandler}
                >
                    Log In
                </Button>
                
                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("signup")}
                > 
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>

            </View>
            {/* <Text>Login</Text> */}
        </View>
        <Footer activeRoute='profile'/>
        </>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"500",
        textAlign:"center",
        backgroundColor:colors.color3,
        color:colors.color2,
        padding:5,
        borderRadius:5,
    },
    container:{
        flex:1,
        padding:20,
        borderRadius:10,
        justifyContent:"center",
        elevation:10,
        backgroundColor:colors.color3
    },
    forgetPasswordText:{
        color:colors.color2,
        marginVertical:10,
        marginHorizontal:20,
        alignSelf:'flex-end',
        fontWeight:"100"
    },
    btnLogin:{
        backgroundColor:colors.color1,
        margin:20,
        padding:6
    },
    orText:{
        color:colors.color2,
        alignSelf:"center",
        fontWeight:"100",
        fontSize:20
    },
    link:{
        color:colors.color2,
        alignSelf:"center",
        textTransform:"uppercase",
        fontSize:18,
        marginHorizontal:20,
        marginVertical:10
    }
})

export default Login