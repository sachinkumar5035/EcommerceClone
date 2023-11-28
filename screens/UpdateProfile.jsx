import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/style';
import {  Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useMessageAndErrorOther } from '../utils/customHooks';
import { updateProfile } from '../redux/action/otherAction';
import { loadUser } from '../redux/action/userAction';

export const inputOptions = {
    style: inputStyling,
    mode: 'outlined',
    activeOutlineColor: colors.color1
}


const UpdateProfile = ({ navigation }) => {

    const {user} = useSelector((state)=>state.user);

    // console.log(user);

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [address, setAddress] = useState(user?.address);
    const [city, setCity] = useState(user?.city);
    const [country, setCountry] = useState(user?.country);
    const [pinCode, setPinCode] = useState(user?.pinCode.toString());

    const dispatch  = useDispatch();


    // const disableUpdateBtn = !name || !email  || !address || !city || !country || !pinCode ;


    const loading = useMessageAndErrorOther(dispatch,navigation,"profile");

    const submitHandler = () => {
        // alert("send otp btn clicked");
        // i have handled the empty cases in backend 
        dispatch(updateProfile(name,email,address,country,pinCode,city));
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