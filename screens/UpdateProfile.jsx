import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/style';
import {  Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';

const inputOptions = {
    style: inputStyling,
    mode: 'outlined',
    activeOutlineColor: colors.color1
}


const UpdateProfile = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");

    const disableUpdateBtn = !name || !email  || !address || !city || !country || !pinCode ;


    const loading = false;


    const submitHandler = () => {
        alert("send otp btn clicked");
    }

    return (

            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }} >
                {/* header */}
                <Header back={true}/>

                <View style={{ marginBottom: 20,paddingTop:70 }}>
                    <Text style={styles.heading}>Edit Profile</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                    style={{
                        padding: 20,
                        elevation: 10,
                        borderRadius: 10,
                        backgroundColor: colors.color3
                    }}
                >
                    <View >

                        <TextInput
                            {...inputOptions}
                            placeholder='Name'
                            value={name}
                            onChangeText={setName}
                        />

                        <TextInput
                            {...inputOptions}
                            placeholder='Email'
                            value={email}
                            keyboardType='email-address'
                            onChangeText={setEmail}
                        />

                        <TextInput
                            {...inputOptions}
                            placeholder='Address'
                            value={address}
                            onChangeText={setAddress}
                        />

                        <TextInput
                            {...inputOptions}
                            placeholder='City'
                            value={city}
                            onChangeText={setCity}
                        />

                        <TextInput
                            {...inputOptions}
                            placeholder='Country'
                            value={country}
                            onChangeText={setCountry}
                        />

                        <TextInput
                            {...inputOptions}
                            placeholder='Pin Code'
                            value={pinCode}
                            keyboardType='numeric'
                            onChangeText={setPinCode}
                        />

                        <Button
                            loading={loading}
                            textColor={colors.color2}
                            style={styles.btnUpdate}
                            disabled={email === ""}
                            onPress={submitHandler}
                        >
                            Update
                        </Button>
                    </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10,
        backgroundColor: colors.color3
    },
    
    btnUpdate: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6
    },
    
})


export default UpdateProfile