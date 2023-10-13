import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler, Modal, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../styles/style';
import { Headline, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';





const SearchModal = ({ isVisible,searchQuery, setActiveSearch, setSearchQuery, products = [] }) => {


    const navigate = useNavigation();
    const backAction = ()=>{
        setSearchQuery(""); // when we click on back button search text must be empty 
        setActiveSearch(false); // active search should be false
        return true;
    }

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",backAction);

        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress",backAction);
        }

    },[]);


    return (
        <Modal visible={isVisible} onDismiss={()=>setActiveSearch(false)}>
            <SafeAreaView>
                <TextInput
                    placeholder="search..."
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                />
                <ScrollView>
                    <View style={{
                        paddingVertical: 40,
                        paddingHorizontal: 10
                    }}>
                        {
                            products.map((i) => (
                                <SearchItem
                                    key={i._id}
                                    imgSrc={i.images[0]?.url}
                                    name={i.name}
                                    price={i.price}
                                    handler={()=>
                                        navigate.navigate("productDetails",{id:i._id})
                                    }
                                />
                            ))
                        }
                    </View>
                </ScrollView>

            </SafeAreaView>
        </Modal>
    )
}

const SearchItem = ({price,name,imgSrc,handler})=>{
    <TouchableOpacity
        onPress={handler}
    >
        <View
            style={{
                padding:20,
                borderRadius:10,
                backgroundColor:colors.color2,
                elevation:5,
                width:"100%",
                alignItems:"center",
                justifyContent:"flex-end",
                flexDirection:"row",
                marginVertical:30
            }}
        >
            <Image 
                source={{
                    uri:imgSrc
                }}
                style={{
                    height:80,
                    width:80,
                    position:"absolute",
                    resizeMode:"contain",
                    top:-15,
                    left:10,
                    borderTopLeftRadius:20,
                    borderBottomRightRadius:20
                }} 
            />

            <View style={{width:"100%", paddingHorizontal:30}}>
                <Text numberOfLines={1}>{name}</Text>
                <Headline>₹{price}</Headline>
            </View>
        </View>

    </TouchableOpacity>
}



export default SearchModal