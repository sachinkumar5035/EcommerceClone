import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors, defaultStyle, inputStyling, defaultImg } from '../styles/style';
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/action/userAction';
import mime from 'mime';
import { useMessageAndError } from '../utils/customHooks';


const inputOptions = {
    style: inputStyling,
    mode: 'outlined',
    activeOutlineColor: colors.color1
}


const Signup = ({ navigation,route }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [avatar, setAvatar] = useState('');

    const disableSignupBtn = !name || !email || !password || !address || !city || !state || !country || !pinCode ;

    const dispatch = useDispatch();

    const loading = useMessageAndError(navigation,"profile",dispatch);

    // console.log(route.params.image);

    const submitHandler = () => {
        const myForm = new FormData();
        myForm.append("name",name);
        myForm.append("email",email);
        myForm.append("password",password);
        myForm.append("address",address);
        myForm.append("city",city);
        myForm.append("state",state);
        myForm.append("country",country);
        myForm.append("pinCode",pinCode);
        if(avatar!==""){
            myForm.append("file",{
                uri:avatar,
                type:mime.getType(avatar),
                name:avatar.split("/").pop()
            });
        }
        dispatch(registerUser(myForm));
    }

    useEffect(() => {
        if(route.params?.image){ // this is sent from the camera.jsx file while selecting the image
          setAvatar(route.params.image);
        }
      }, [route.params])

    return (
        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }} >
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Sign Up</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                    style={{
                        padding: 20,
                        elevation: 10,
                        borderRadius: 10,
                        backgroundColor: colors.color3
                    }}
                >
                    <View style={{ minHeight:800 }}>
                        <Avatar.Image
                            style={{
                                alignSelf: "center",
                                backgroundColor: colors.color1,
                            }}
                            size={80}
                            source={{
                                uri: avatar ? avatar : defaultImg,
                            }}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('camera')}>
                            <Button textColor={colors.color1}>Change Photo</Button>
                        </TouchableOpacity>

                        <TextInput
                            {...inputOptions}
                            placeholder='Name'
                            value={name}
                            // keyboardType='email-address'
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
                            placeholder='Password'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
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
                            placeholder='State'
                            value={state}
                            onChangeText={setState}
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
                            style={styles.btnLogin}
                            disabled={disableSignupBtn}
                            onPress={submitHandler}
                        >
                            Sign Up
                        </Button>

                        <Text style={styles.orText}>OR</Text>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("login")}
                        >
                            <Text style={styles.link}>Log in</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
                {/* <Text>Login</Text> */}
            </View>
            <Footer activeRoute='profile' />
        </>
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
    forgetPasswordText: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: 'flex-end',
        fontWeight: "100"
    },
    btnLogin: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6
    },
    orText: {
        color: colors.color2,
        alignSelf: "center",
        fontWeight: "100",
        fontSize: 20
    },
    link: {
        color: colors.color2,
        alignSelf: "center",
        textTransform: "uppercase",
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 10
    }
})

export default Signup