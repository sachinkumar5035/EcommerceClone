import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/style';
import { Avatar } from 'react-native-paper';



const Footer = ({ activeRoute = "home" }) => {
    const navigate = useNavigation();

    const isAuthenticated = true;
    const loading = false;

    const navigationHandler = (key) => {

        switch (key) {
            case 0:
                navigate.navigate('home');
                break;
            case 1:
                navigate.navigate('cart');
                break;
            case 2:
                if(isAuthenticated){
                    navigate.navigate('profile');
                }
                else{
                    navigate.navigate('login');
                }
                break;
            default:
                navigate.navigate('home');
                break;
        }

    }


    return (
        <View
            style={{
                backgroundColor: colors.color1,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                height: 50
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}

            >
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => navigationHandler(1)}
                >
                    <Avatar.Icon style={{
                        backgroundColor: colors.color1,
                    }}
                    icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => navigationHandler(2)}
                >
                    <Avatar.Icon style={{
                        backgroundColor: colors.color1
                    }}
                    icon={
                        isAuthenticated === false
                          ? "login"
                          : activeRoute === "profile"
                          ? "account"
                          : "account-outline"
                      }
                    />

                </TouchableOpacity>
            </View>

            <View
                style={{
                    position: "absolute",
                    height: 80,
                    width: 80,
                    backgroundColor: colors.color2,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    top: -30
                }}
            >
                <View
                    style={{
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => navigationHandler(0)}
                    >
                        <Avatar.Icon style={{
                            backgroundColor: colors.color1
                        }}
                        icon={activeRoute === "home" ? "home" : "home-outline"}
                        />

                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default Footer