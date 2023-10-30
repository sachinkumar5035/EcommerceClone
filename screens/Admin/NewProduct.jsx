import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/style'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../UpdateProfile'
import SelectComponent from '../../components/SelectComponent'



// from myModal we are navigating to update product by passing Id so that id can be accessed here also by using route.params
const NewProduct = ({ navigation, route }) => {

    const loading = false;
    const loadingOther = false;
    // console.log(route.params);

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Laptop");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([
        { _id: "ID1", category: "Laptop" },
        { _id: "ID2", category: "Cloths" },
        { _id: "ID3", category: "Daily" }
    ]);
    const [visible, setVisible] = useState(false);

    const submitHandler = () => {
        console.log(name, description, price, stock, categoryId);
    }


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
                                        textAlignVertical: 'center'
                                    }}
                                    onPress={() => setVisible(true)}
                                >{category}</Text>

                                <Button
                                    textColor={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        margin: 20,
                                        padding: 6
                                    }}
                                    onPress={submitHandler}
                                    loading={loading}
                                    disabled={loading}
                                >
                                    Create
                                </Button>

                            </View>
                        </ScrollView>
                    )
                }
            </View>
            <SelectComponent visible={visible} setVisible={setVisible} setCategory={setCategory} setCategoryId={setCategoryId} categories={categories} />

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