import { Camera, useCameraDevice, useCameraDevices, useCameraPermission } from "react-native-vision-camera";
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { colors } from "../styles/style";
import {launchCamera,launchImageLibrary} from "react-native-image-picker";


 
const CameraComponent = ({ navigation, route }) => {

    const [devices, setDevices] = useState(useCameraDevice('back'));
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [selectImage, setSelectImage] = useState('');

    // console.log(route.params);

    useEffect(() => {
        checkPermission();
    }, [])

    const checkPermission = async () => {
        const cameraPermission = await Camera.requestCameraPermission();
        const audioPermission = await Camera.requestMicrophonePermission();
        // console.log(cameraPermission + " hjajkskda " + audioPermission);
        // console.log(devices);
    }


    const openImagePicker = async () => {
        // console.log("image picker clicked ");

        let options={
            storageOptions:{
                path:"images"
            }
        }
        launchImageLibrary(options,response=>{
            // setSelectImage(response.assets[0].uri);
            // console.log(response.assets[0].uri);
            // console.log(response);
            
            if(route.params?.newProduct){ // in newProduct we passed newProduct as a flag
                return navigation.navigate("newproduct",{
                    image:response.assets[0].uri
                })
            }
            if(route.params?.updateProduct){ // in update product we passed updateProduct as a flag
                return navigation.navigate("productimages",{
                    image:response.assets[0].uri
                })
            }
            if(route.params?.updateProfile){
                return navigation.navigate("profile",{ // in update profile we passed updateProfile as a flag while navigating 
                    image:response.assets[0].uri
                })
            }
            else{
                return navigation.navigate("signup",{
                    image:response.assets[0].uri
                })
            }
        })
    }


    const clickPicture = () => {
        console.log("click picture clicked ");
    }

    const flipAction = () => {
        console.log("flip action triggered");
        // setDevices((devices) =>
        //     devices === useCameraDevice('back') ? useCameraDevice('front') : useCameraDevice('back')
        // );
    }


    return (
        <View
            style={{
                flex: 1
            }}
        >
            <Camera
                device={devices}
                isActive={true}
                style={{
                    ...StyleSheet.absoluteFill,
                    flex: 1
                }}
                ref={(e) => setCamera(e)}
            />

            <View
                style={{
                    flexDirection: "row",
                    bottom: 10,
                    width: "100%",
                    justifyContent: "space-evenly",
                    position: "absolute",
                }}
            >
                <TouchableOpacity onPress={()=>openImagePicker()}>
                    <Avatar.Icon icon="image" size={50} color={colors.color2} style={{backgroundColor: colors.color1}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickPicture()} >
                    <Avatar.Icon icon="camera" size={50} color={colors.color2} style={{backgroundColor: colors.color1}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => flipAction()}>
                    <Avatar.Icon icon="camera-flip" size={50} color={colors.color2} style={{backgroundColor: colors.color1}}/>
                </TouchableOpacity>

            </View>
            
        </View>
    );
}

export default CameraComponent
