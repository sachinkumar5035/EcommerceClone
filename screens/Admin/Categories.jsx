import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { defaultStyle, colors, inputStyling } from '../../styles/style'
import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard';
import { Button, TextInput } from 'react-native-paper';
import { useMessageAndErrorOther, useSetCategories } from '../../utils/customHooks';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addCategory, deleteCategory } from '../../redux/action/otherAction';

const inputOptions = {
    style: inputStyling,
    mode: 'outlined',
    activeOutlineColor: colors.color1
}


const Categories = ({navigation}) => {
    const [categories, setCategories] = useState([]);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");
    // console.log(categories);
    useSetCategories(setCategories, isFocused);
    const loading = useMessageAndErrorOther(dispatch,navigation,"adminpanel");
    const deleteHandler = (id) => {
        // console.log("deleting category: ", id)
        dispatch(deleteCategory(id));
    }

    const submitHandler = () => {
        // console.log("calling add category function with ", category);
        dispatch(addCategory(category));
    }

    return (
        <View style={{ ...defaultStyle, backgroundColor: colors.color5 }} >
            {/* header */}
            <Header back={true} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Categories</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    padding: 0,
                }}
            >

                <View
                    style={{
                        backgroundColor: colors.color2,
                        padding: 10,
                        minHeight: 400,
                        borderRadius: 10
                    }}
                >
                    {
                        categories.length > 0 ? (
                            categories.map((item, index) => (
                                <CategoryCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.category}
                                    deleteHandler={deleteHandler}
                                />
                            ))
                        ) : (
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600'
                            }}>No category Present</Text>
                        )
                    }
                </View>
            </ScrollView>

            <View style={styles.container}>

                <TextInput
                    {...inputOptions}
                    placeholder='Category'
                    value={category}
                    onChangeText={setCategory}
                />
                <Button
                    style={{
                        backgroundColor: colors.color1,
                        margin: 20,
                        padding: 6
                    }}
                    textColor={colors.color5}
                    disabled={!category}
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
    container: {
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3,
        // alignItems:"center"
    },
})

export default Categories