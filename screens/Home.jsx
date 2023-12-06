import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors, defaultStyle } from '../styles/style';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/action/productAction';
import { useSetCategories } from '../utils/customHooks';



const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigation();

    const [category, setCategory] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const {products} = useSelector((state)=>state.product); // this state we have defined in store in productReducer
    const [categories,setCategories] = useState([]);
    const isFocused = useIsFocused();

    const categoryButtonHandler = id => {
        // console.log(id); //item id setCategory function will be called to set the category
        setCategory(id);
    };

    // console.log("products ",products[0].images);


    const addToCartHandler = (id, stock) => {
        // console.log("@@@id",id,"   @@stock ",stock)

        // navigate.navigate('cart',{
        //     id:id,
        //     stock:count
        // })
    };

    useSetCategories(setCategories,isFocused);

    useEffect(() => {
        dispatch(getAllProducts(searchQuery,category)) ;
    }, [dispatch,category,searchQuery,isFocused])


    return (
        <>
            {
                activeSearch && (
                    <SearchModal
                        searchQuery={searchQuery}
                        setActiveSearch={setActiveSearch}
                        setSearchQuery={setSearchQuery}
                        products={products}
                        isVisible={activeSearch}
                    />
                )}

            {
                loading?<Loader/>:(
                    <View style={{ ...defaultStyle }} >
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

                    <Heading text1='Our' text2='Products' />
                    <TouchableOpacity onPress={() => setActiveSearch(prev => !prev)}>
                        <Avatar.Icon icon='magnify' size={50} color="grey" style={{ backgroundColor: colors.color2, elevation: 12 }} />
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
                    {products && products.map((item, index) => {
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
                            description={item.description}
                        />
                    })
                    }
                </ScrollView>
            </View>
                )
            }

            <Footer    
                activeRoute={"home"} 
            />
        </>
    );
};

export default Home;
