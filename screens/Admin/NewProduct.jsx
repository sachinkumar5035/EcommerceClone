import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/style'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../UpdateProfile'
import SelectComponent from '../../components/SelectComponent'
import { useDispatch } from 'react-redux'
import { useMessageAndErrorOther, useSetCategories } from '../../utils/customHooks'
import { useIsFocused } from '@react-navigation/native'
import { createProduct } from '../../redux/action/productAction'
import mime from 'mime';
import Toast from 'react-native-toast-message'
import { CLEAR_ERROR } from '../../redux/constants/userConstants'


// from myModal we are navigating to update product by passing Id so that id can be accessed here also by using route.params
const NewProduct = ({ navigation, route }) => {
    // console.log(route.params);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    // const loadingOther = useSelector(state=>state.product);
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Choose Category");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const isFocused = useIsFocused();
    useSetCategories(setCategories,isFocused);
    
    const disableBtn = !name || !price || !description || !stock || !image || (category==="Choose Category"); 

    const submitHandler = () => {
        const myForm = new FormData();
        myForm.append("name",name);
        myForm.append("price",price);
        myForm.append("description",description);
        myForm.append("stock",stock);
        if(category)
            myForm.append("category",categoryId.toString().trim()); // at the time of product creation we need to pass the product id
        myForm.append("file",{
            uri:image,
            type:mime.getType(image),
            name:image.split("/").pop()
        })
        dispatch(createProduct(myForm));
        navigation.navigate("adminpanel");
        Toast.show({
            type:"success",
            text1:"Product created successfully"
        })
        dispatch({
            type:CLEAR_ERROR
        })
        // console.log(myForm);
    }

    const loading = useMessageAndErrorOther(dispatch,navigation,"adminpanel");

    useEffect(() => {
      if(route.params?.image){ // this is sent from the camera.jsx while selecting the image 
        setImage(route.params.image);
      }
    }, [route.params])
    
    return (
        <>
            <View
                style={{
                    ...defaultStyle,
                    backgroundColor: colors.color5
                }}
            >
                <Header back={true} />

                <View style={{ marginBottom: 20, paddingTop: 70 }}>
                    <Text style={styles.heading}>New Product</Text>
                </View>

                {
                    loading ? (<Loader />) : (
                        <ScrollView
                            style={{
                                padding: 20,
                                elevation: 10,
                                borderRadius: 10,
                                backgroundColor: colors.color3
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    height: 650
                                }}
                            >

                                <View
                                    style={{
                                        height: 80,
                                        width: 80,
                                        marginBottom: 20,
                                        alignSelf: "center",
                                        // backgroundColor:colors.color1
                                    }}
                                >
                                    <Avatar.Image
                                        size={80}
                                        backgroundColor={colors.color1}
                                        source={{
                                            uri: image ? image : null,
                                        }}
                                    />
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("camera", { newProduct: true })}
                                    >
                                        <Avatar.Icon
                                            icon={"camera"}
                                            size={30}
                                            color={colors.color3}
                                            style={{
                                                backgroundColor: colors.color5,
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 2
                                            }}
                                        />
                                    </TouchableOpacity>


                                </View>

                                <TextInput
                                    {...inputOptions}
                                    placeholder='Name'
                                    value={name}
                                    onChangeText={setName}
                                />

                                <TextInput
                                    {...inputOptions}
                                    placeholder='Description'
                                    value={description}
                                    onChangeText={setDescription}
                                />

                                <TextInput
                                    {...inputOptions}
                                    placeholder='Price'
                                    keyboardType='number-pad'
                                    value={price}
                                    onChangeText={setPrice}
                                />

                                <TextInput
                                    {...inputOptions}
                                    placeholder='Stock'
                                    keyboardType='number-pad'
                                    value={stock}
                                    onChangeText={setStock}
                                />

                                <Text
                                    style={{
                                        height: 50,
                                        backgroundColor: colors.color2,
                                        marginVertical: 10,
                                        marginHorizontal: 20,
                                        textAlign: "center",
                                        borderRadius: 3,
                                        textAlignVertical: 'center',
                                        textTransform:"uppercase"
                                    }}
                                    onPress={() => setVisible(true)}
                                >
                                    {category}
                                </Text>

                                <Button
                                    textColor={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        margin: 20,
                                        padding: 6
                                    }}
                                    onPress={submitHandler}
                                    loading={loading}
                                    disabled={disableBtn || loading}
                                >
                                    Create
                                </Button>

                            </View>
                        </ScrollView>
                    )
                }
            </View>
            <SelectComponent
                visible={visible}
                setVisible={setVisible}
                setCategory={setCategory}
                setCategoryId={setCategoryId}
                categories={categories}
            />
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
    }
})

export default NewProduct