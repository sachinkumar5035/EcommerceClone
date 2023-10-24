import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { colors, defaultStyle } from '../../styles/style'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'

const AdminPanel = ({navigation}) => {

    const loading = false;

    const navigationHandler = () => {

    }

    const deleteProductHandler=(id)=>{
        console.log("product deleted " + id);
    }

    return (
        <View style={defaultStyle}>

            <Header back={true} />
            {/* heading  */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Admin</Text>
            </View>
            {
                loading ? (<Loader />) : (
                    <>
                        <View style={{
                            backgroundColor: colors.color3,
                            borderRadius: 20,
                            alignItems: 'center',

                        }}>
                            <Chart inStock={18} outOfStock={3} />
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            margin: 10
                        }} >
                            <ButtonBox icon={'plus'} text={'Plus'} handler={navigationHandler} />
                            <ButtonBox icon={'format-list-bulleted-square'} text={'All Orders'} handler={navigationHandler} />
                            <ButtonBox icon={'plus'} text={'Category'} reverse={true} handler={navigationHandler} />

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
                                        category={item.category}
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