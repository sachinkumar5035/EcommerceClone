import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Searchbar } from 'react-native-paper';
import { useNavigate } from 'react-router-dom';





const SearchModal = ({ searchQuery, setActiveSearch, setSearchQuery, products = [] }) => {


   

    return (
        <View style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: 100,
            backgroundColor: colors.color2,
            padding: 35,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
            <SafeAreaView>
                <Searchbar
                    placeholder="search..."
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={{
                        marginTop: 20
                    }}
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
                                        navigate.navigate("productdetails",{id:i._id})
                                    }
                                />
                            ))
                        }
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
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
                    resizeMode:"contain"
                }} 
            />

            
        </View>

    </TouchableOpacity>
}



export default SearchModal