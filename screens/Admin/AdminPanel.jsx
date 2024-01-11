import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { colors, defaultStyle } from '../../styles/style'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
// import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'
import { useAdminProduct } from '../../utils/customHooks'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { deleteProduct, getAdminProducts } from '../../redux/action/productAction'
import { useEffect } from 'react'

// const products=[];


const AdminPanel = ({navigation}) => {

    // const loading = false;
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const {loading,products,inStock,outOfStock} = useAdminProduct(dispatch,isFocused);

    const navigationHandler = (text) => {
        // based on the text we will navigate through the screen 
        // make sure text will match with ButtonBox text 
        switch (text) {
            case "Category":
                navigation.navigate('categories');
                break;
            case "All Orders":
                navigation.navigate('adminorders');
                break;
            case "Product":
                navigation.navigate('newproduct');
                break;
            default:
                navigation.navigate('newproduct');
                break;
        }
    }

    const deleteProductHandler=(id)=>{
        // console.log("product deleted " + id);
        dispatch(deleteProduct(id));
        navigation.navigate("profile");
    }
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={defaultStyle}>

            <Header back={true} />
            {/* heading  */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Admin Panel</Text>
            </View>
            {
                loading ? (<Loader />) : (
                    <>
                        <View 
                            style={{
                                backgroundColor: colors.color3,
                                borderRadius: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Chart inStock={inStock} outOfStock={outOfStock} />
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            margin: 10
                        }} >
                            <ButtonBox icon={'plus'} text={'Product'} handler={navigationHandler} />
                            <ButtonBox icon={'format-list-bulleted-square'} text={'All Orders'} reverse={true} handler={navigationHandler} />
                            <ButtonBox icon={'plus'} text={'Category'}  handler={navigationHandler} />

                        </View>

                        <ProductListHeading />

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {
                                    products.map((item,index)=>(
                                        <ProductListItem 
                                        navigate={navigation}
                                        deleteHandler={deleteProductHandler}
                                        key={item._id} 
                                        index={index} 
                                        price={item.price} 
                                        stock={item.stock} 
                                        name={item.name} 
                                        category={item.category?.category}
                                        imgSrc={item.images[0].url}
                                        id={item._id}
                                    />
                                    ))
                                }
                            </View>
                        </ScrollView>

                    </>
                )
            }
        </View>
        </ScrollView>
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

export default AdminPanel

// center a div?





