import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Headline } from 'react-native-paper'
import { colors } from '../styles/style'

const SelectComponent = ({ visible, setVisible, setCategory, setCategoryId, categories = [] }) => {

    // i is selected category from the list
    const selectCategoryHandler =(i)=>{
        // console.log(i);
        // updating the category and categoryId
        setCategory(i.category);
        setCategoryId(i._id);
        setVisible(false);
    }

    return (
        visible && (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setVisible(false)}
                >
                    <Avatar.Icon
                        icon={'close'}
                        size={30}
                        style={{
                            alignSelf: 'flex-end',
                            backgroundColor: colors.color1
                        }}
                    >
                    </Avatar.Icon>
                </TouchableOpacity>

                <Headline style={styles.heading}>Select a Category</Headline>
                <ScrollView>
                    {
                        // i is categories object which consist of _id and category property
                        categories.map(i => (
                            <Text
                                key={i._id}
                                onPress={() => selectCategoryHandler(i)}
                                style={styles.text}
                            >
                                {i.category}
                            </Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color2,
        position: "absolute",
        padding: 35,
        borderRadius: 20,
        width: "90%",
        height: "90%",
        alignSelf: "center",
        top: 50,
        elevation: 5
    },
    heading: {
        textAlign: "center",
        marginVertical: 10,
        backgroundColor: colors.color3,
        borderRadius: 5,
        padding: 3,
        color: colors.color2
    },
    text: {
        fontSize: 17,
        fontWeight: "100",
        textTransform: "uppercase",
        marginVertical: 10,
    },
})



export default SelectComponent