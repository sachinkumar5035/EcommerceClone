import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/style';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const inputOptions={
    style:inputStyling,
    mode:'outlined',
    activeOutlineColor:colors.color1
}


const ForgetPassword = ({navigation}) => {

    const [email, setEmail] = useState("");

    const loading = false;


    const submitHandler =()=>{
        // alert("send otp btn clicked");
        navigation.navigate("verify");
    }

    return (
        <>
        <View style={{...defaultStyle,backgroundColor:colors.color2}} >
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.heading}>Forget Password</Text>
            </View>

            <View style={styles.container}>
                <TextInput 
                    {...inputOptions}
                    placeholder='Email'
                    value={email}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />

                <Button 
                    loading={loading}
                    textColor={colors.color2} 
                    style={styles.btnLogin}
                    disabled={email===""}
                    onPress={submitHandler}
                >
                    Send OTP
                </Button>
                
                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("login")}
                > 
                    <Text style={styles.link}>Log in</Text>
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

export default ForgetPassword