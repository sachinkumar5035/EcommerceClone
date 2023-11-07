import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors, defaultStyle } from '../../styles/style'
import Header from '../../components/Header'
import ImageCard from '../../components/ImageCard'
import { Avatar, Button } from 'react-native-paper'


const ProductImages = ({ navigation, route }) => {

    console.log(route.params);
    console.log("productId is ", route.params.id); // this is product id for which images needs to be manage
    const [images] = useState(route.params.images);
    const [productId] = useState(route.params.id); // id is the product for which we are managing the images 
   
    const loading = false;
    const [image,setImage] = useState(null);
    const [imageChanged,setImageChanged] = useState(false);

    const submitHandler = ()=>{
        console.log("submit handler called");
    }

    const deleteHandler = (id) => { // this id is coming from imageCard page
        console.log("inside delete handler");
        console.log("Image id ", id);
        console.log("Product id ", productId);
    }

    useEffect(() => {
        if(route.params?.image){ // this is sent from the camera.jsx while selecting the image
          setImage(route.params.image);
          setImageChanged(true);
        }
      }, [route.params])


    return (
        <View style={{
            ...defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Images</Text>
            </View>

            <ScrollView
                style={{
                    marginBottom: 20
                }}
            >

                <View
                    style={{
                        backgroundColor: colors.color2,
                        padding: 40,
                        minHeight: 400,
                        borderRadius: 5
                    }}
                >

                    {
                        images.map((image) => (
                            <ImageCard
                                key={image._id}
                                src={image.url} // this is image url
                                id={image._id} // this is image id not the product id
                                deleteHandler={deleteHandler}
                            /> // need to create this imageCard component
                        ))
                    }
                </View>
            </ScrollView>

            <View
                style={{
                    padding: 20,
                    borderRadius: 10,
                    backgroundColor: colors.color3
                }}
            >
                <Image
                    style={{
                        backgroundColor: colors.color2,
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        alignSelf: "center",
                        resizeMode: "contain"
                    }}
                    source={{ uri: image }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("camera", { updateProduct: true })}
                    >
                        <Avatar.Icon
                            icon={'camera'}
                            size={30}
                            style={{
                                backgroundColor: colors.color2,
                                margin: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>
                
                <Button
                    style={{
                        backgroundColor:colors.color1,
                        
                        padding:5
                    }}
                    textColor={colors.color2}
                    disabled={!imageChanged}
                    onPress={submitHandler}
                    loading={loading}
                >
                    Add
                </Button>


            </View>
            
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
}
)

export default ProductImages