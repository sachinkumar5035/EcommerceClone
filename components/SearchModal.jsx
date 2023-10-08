import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Searchbar } from 'react-native-paper';





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
                        marginTop:20
                    }} 
                />
                <ScrollView>
                    <View style={{
                        paddingVertical:40,
                        paddingHorizontal:10
                    }}>

                    </View>
                </ScrollView>
                
            </SafeAreaView>
        </View>
    )
}

export default SearchModal