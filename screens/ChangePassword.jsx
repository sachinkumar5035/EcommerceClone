import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/style';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';

const inputOptions={
    style:inputStyling,
    mode:'outlined',
    activeOutlineColor:colors.color1
}


const ChangePassword = ({navigation}) => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const loading = false;

    const submitHandler =()=>{
        alert("login btn clicked");
    }

    return (
        
        <View style={{...defaultStyle,backgroundColor:colors.color2}} >
            
            {/* header */}
            <Header back={true}/>

            <View style={{ marginBottom: 20,paddingTop:70 }}>
                <Text style={styles.heading}>Change Password</Text>
            </View>

            <View style={styles.container}>
                <TextInput 
                    {...inputOptions}
                    placeholder='Old Password'
                    value={oldPassword}
                    onChangeText={setOldPassword}
                />
                
                <TextInput 
                    {...inputOptions}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Button 
                    loading={loading}
                    textColor={colors.color2} 
                    style={styles.btnChange}
                    disabled={oldPassword==="" || newPassword ===""}
                    onPress={submitHandler}
                >
                    Change
                </Button>
            </View>
        </View>
        
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
    btnChange:{
        backgroundColor:colors.color1,
        margin:20,
        padding:6
    },
})

export default ChangePassword