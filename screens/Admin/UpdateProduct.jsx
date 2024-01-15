import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle } from '../../styles/style'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import { inputOptions } from '../UpdateProfile'
import SelectComponent from '../../components/SelectComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { useMessageAndErrorOther, useSetCategories } from '../../utils/customHooks'
import { getProductDetails, updateProduct } from '../../redux/action/productAction'



// from myModal we are navigating to update product by passing Id so that id can be accessed here also by using route.params
const UpdateProduct = ({ navigation, route }) => {

    // const loadingOther = false; // this loading is for button 
    // console.log("Update product ",route.params);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const {product,loading} = useSelector(state=>state.product);

    const [visible, setVisible] = useState(false);
    const [id] = useState(route.params.id);
    const [name, setName] = useState(product?.name);
    const [stock, setStock] = useState(product?.stock?.toString());
    const [price, setPrice] = useState(product?.price?.toString());
    const [description, setDescription] = useState(product?.description);
    const [category, setCategory] = useState(product?.category?.category);
    const [categoryId, setCategoryId] = useState(product?.category?._id);
    const [categories, setCategories] = useState([]);
    useSetCategories(setCategories,isFocused);
    const loading1 = useMessageAndErrorOther(dispatch,navigation,"adminpanel"); // this loading is used when page is fetching the data 
    const images = [];
    const submitHandler = () => {
        // console.log(name, description, price, stock, categoryId,id);
        dispatch(updateProduct(name,description,categoryId,price,stock,id));
        // navigation.navigate("adminpanel");
    }

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [id,isFocused,dispatch])
    


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
                    <Text style={styles.heading}>Update Product</Text>
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
                                <Button
                                    textColor={colors.color1}
                                    onPress={() => navigation.navigate('productimages', {
                                        id, // id is product id 
                                        images: images // here we are sending the images array for the product to ProductImages page
                                    })}
                                >
                                    Manage Images
                                </Button>

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
                                >{category}</Text>

                                <Button
                                    textColor={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        margin: 20,
                                        padding: 6
                                    }}
                                    onPress={submitHandler}
                                    loading={loading1}
                                    disabled={loading}
                                >Update</Button>

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

export default UpdateProduct