import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle,colors, inputStyling } from '../../styles/style'
import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard';
import { Button, TextInput } from 'react-native-paper';

const inputOptions={
    style:inputStyling,
    mode:'outlined',
    activeOutlineColor:colors.color1
}


const categories=[
    {
        name:"Laptop",
        _id:"ID1",

    },
    {
        name:"InnerWear",
        _id:"ID2",

    },
    {
        name:"TopWear",
        _id:"ID3",

    },
    {
        name:"Shoes",
        _id:"ID4",

    },
    {
        name:"Sports wear",
        _id:"ID5",

    },
    {
        name:"TopWear",
        _id:"ID6",

    },
    {
        name:"Shoes",
        _id:"ID7",

    },
    {
        name:"Sports wear",
        _id:"ID8",

    },
];


const Categories = () => {

    const deleteHandler=(id)=>{
        console.log("deleting category: ", id)
    }

    const [category,setCategory] = useState("");

    const loading = false;

    const submitHandler = ()=>{

    }

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }} >
                {/* header */}
                <Header back={true}/>

                <View style={{ marginBottom: 20,paddingTop:70 }}>
                    <Text style={styles.heading}>Categories</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                    style={{
                        padding:0,
                    }}  
                >

                    <View
                        style={{
                            backgroundColor:colors.color2,
                            padding:10,
                            minHeight:400,
                            borderRadius:10
                        }}
                    >
                        {
                            categories.map((item,index)=>(
                                <CategoryCard key={item._id} id={item._id} name={item.name} deleteHandler={deleteHandler}/>
                            ))
                        }
                    </View>
                </ScrollView>

                <View style={styles.container}>
                    
                <TextInput 
                    {...inputOptions}
                    placeholder='Category'
                    secureTextEntry={true}
                    value={category}
                    onChangeText={setCategory}
                />
                <Button
                    style={{
                        backgroundColor:colors.color1,
                        margin:20,
                        padding:6
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
        padding:20,
        elevation:10,
        borderRadius:10,
        backgroundColor:colors.color3,
        // alignItems:"center"
    },
})

export default Categories