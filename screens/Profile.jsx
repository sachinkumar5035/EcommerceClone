import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const user = {
    name: "skumar",
    email: "skumar@gmail.com"
}

const loading = true;

const Profile = ({ navigation }) => {

    const [avatar, setAvatar] = useState("null");

    const navigateHandler = () => {

    }

    return (

        <>
            <View style={{ ...defaultStyle, backgroundColor: colors }} >
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Profile</Text>
                </View>

                {/* Loading */}
                {
                    loading ? 
                    (<Loader/>) : 
                   ( <>

                        <View style={styles.container}>
                            <Avatar.Image
                                size={100}
                                backgroundColor={colors.color1}
                                source={{
                                    uri: avatar,
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