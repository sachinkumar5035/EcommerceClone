import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle } from '../styles/style';
import Header from '../components/Header';
import { Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

const categories = [
    { category: 'Nice1', _id: 'akjskdla' },
    { category: 'Nice2', _id: 'jskdla' },
    { category: 'Nice3', _id: 'akskdla' },
    { category: 'Nice4', _id: 'akasdskdla' },
    { category: 'Nice5', _id: 'akjsasddla' },
    { category: 'Nice6', _id: 'akjskasdaa' },
    { category: 'Nice7', _id: 'akjskasa' },
];

const products = [
    {
        _id: 'alskjldak',
        name: 'sample name1',
        stock: 23,
        images: [
            {
                url: 'https://picsum.photos/id/237/600/600',
            },
        ],
        price: 1200,
    },
    {
        _id: 'alsasldak',
        name: 'sample name2',
        stock: 23,
        images: [
            {
                url: 'https://picsum.photos/id/237/600/600',
            },
        ],
        price: 1200,
    },
    {
        _id: 'aasldak',
        name: 'sample name3',
        stock: 23,
        images: [
            {
                url: 'https://picsum.photos/id/237/600/600',
            },
        ],
        price: 1200,
    },
    {
        _id: 'lsasldak',
        name: 'sample name4',
        stock: 23,
        images: [
            {
                url: 'https://picsum.photos/id/237/600/600',
            },
        ],
        price: 1200,
    },
];

const Home = () => {
    const navigate = useNavigation();

    const [category, setCategory] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const categoryButtonHandler = id => {
        // console.log(id); //item id setCategory function will be called to set the category
        setCategory(id);
    };

    const addToCartHandler = (id,stock) => {
        console.log("adding to cart"+id);
    };

    return (
        <>
            {activeSearch && (
                <SearchModal 
                    searchQuery={searchQuery}
                    setActiveSearch={setActiveSearch}
                    setSearchQuery={setSearchQuery}
                    products={products}
                    isVisible={activeSearch}
                />
            )}

            <View style={{...defaultStyle}} >
                {/* header  */}
                <Header />

                {/* Heading row */}
                <View
                    style={{
                        paddingTop: 70,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View>
                        <Text style={{ fontSize: 25 }}>Our</Text>
                        <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
                    </View>

                    <TouchableOpacity onPress={() => setActiveSearch(prev => !prev)}>
                        {/* <Avatar.Icon icon={'magnify'} size={50} color="grey" style={{backgroundColor:colors.color2, elevation:12}}/> */}
                        <Text>Search...</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}>
                        {categories.map((item, index) => (
                            <Button
                                key={item._id}
                                style={{
                                    backgroundColor:
                                        category === item._id ? 'red' : colors.color5,
                                    borderRadius: 100,
                                    margin: 5,
                                }}
                                onPress={() => categoryButtonHandler(item._id)}>
                                <Text
                                    style={{
                                        color: category === item._id ? colors.color2 : 'gray',
                                        fontSize: 12,
                                    }}>
                                    {item.category}
                                </Text>
                            </Button>
                        ))}
                    </ScrollView>
                </View>

                {/* Products  */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {products.map((item, index) => {
                        return <ProductCard
                            stock={item.stock}
                            price={item.price}
                            image={item.images[0]?.url}
                            name={item.name}
                            id={item._id}
                            addToCartHandler={addToCartHandler}
                            key={item._id}
                            i={index}
                            navigate={navigate}
                        />
                    })
                    }
                </ScrollView>
            </View>

           <Footer activeRoute={"home"}/>


        </>
    );
};

export default Home;
