import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors, defaultImg, defaultStyle } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const user = {
    name: "skumar",
    email: "skumar@gmail.com"
}



const Profile = ({ navigation,route }) => {

    const [avatar, setAvatar] = useState("https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); // getting null error

    const logoutHandler = ()=>{
        // console.log("logging out the user");
        alert("logging out");
    }



    const navigateHandler = (text) => {
        switch (text) {
            // text is comming from buttonBox text it must be same 
            case "Admin":
                navigation.navigate("adminpanel");
                break;
            case "Orders":
                navigation.navigate("orders");
                break;
            case "Profile":
                navigation.navigate("updateprofile");
                break;
            case "Password":
                navigation.navigate("changepassword");
                break;
            case "Sign Out":
                logoutHandler();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if(route.params?.image){ // this is sent from the camera.jsx file while selecting the image
          setAvatar(route.params.image);
          // to save the image while changing it we need to call a function for that, we will do it later
        }
      }, [route.params])

    const loading = false; // now this is for testing purpose later it will be fetched from backend 

    return (

        <>
            <View style={{ ...defaultStyle, backgroundColor: colors }} >
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Profile</Text>
                </View>

                {/* Loading */}
                {
                    loading ?
                        (<Loader />) :
                        (<>

                            <View style={styles.container}>
                                {/* profile image  */}
                                <Avatar.Image
                                    size={100}
                                    backgroundColor={colors.color1}
                                    source={{
                                        uri: avatar ? avatar : defaultImg, // image giving error 
                                    }}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate("camera", { updateProfile: true })}>
                                    <Button textColor={colors.color1}>Change Photo</Button>
                                </TouchableOpacity>

                                <Text style={styles.nameStyle}>
                                    {user?.name}
                                </Text>

                                <Text style={{ fontWeight: "300", color: colors.color2 }}>
                                    {user?.email}
                                </Text>
                            </View>

                            <View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        margin: 10,
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {/* because we are passing common navigationHandler we can use switch statement  */}
                                    <ButtonBox text={"Orders"} icon={'format-list-bulleted-square'} handler={navigateHandler} />
                                    <ButtonBox text={"Admin"} icon={"view-dashboard"} reverse={true} handler={navigateHandler} />
                                    <ButtonBox text={"Profile"} icon={"pencil"} handler={navigateHandler} />
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        margin: 10,
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <ButtonBox text={"Password"} icon={"pencil"} handler={navigateHandler} />
                                    <ButtonBox text={"Sign out"} icon={"exit-to-app"} handler={navigateHandler} />
                                </View>

                            </View>

                        </>)
                }

            </View>

            <Footer />
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
        elevation: 7,
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        alignItems: 'center'

    },
    nameStyle: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
        color: colors.color2
    }
})

export default Profile