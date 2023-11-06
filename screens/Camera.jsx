import { Camera, useCameraDevice, useCameraDevices, useCameraPermission } from "react-native-vision-camera";
import { View, StyleSheet } from 'react-native';
import { Button, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const CameraComponent = () => {

    const devices = useCameraDevice('back');
    


    useEffect(()=>{
        checkPermission();
    },[])

    const checkPermission = async ()=>{
        const cameraPermission = await Camera.requestCameraPermission();
        const audioPermission = await Camera.requestMicrophonePermission();
        console.log(cameraPermission + " hjajkskda " + audioPermission);
        console.log(devices);

    }

    // if(device==null)
    //     return <Loader/>

    return (
            <View   
                style={{flex:1}}

            >
                    <Camera
                        device={devices}
                        isActive={true}
                        style={
                            StyleSheet.absoluteFill

                        }
                        ref={(e)=>setCamera(e)}
                        
                    />
                    <View
                        style={{
                            flexDirection:"row",
                            bottom:10,
                            justifyContent:"space-evenly",
                            width:"100%"
                        }}
                    >
                        <MyIcon image="image" handler = {openImagePicker} />
                        <MyIcon image="camera" handler = {clickPicture} />
                        <MyIcon image="camera-flip" handler = {()=>{}} />
                    </View>
            </View>
    );
}


export default CameraComponent
