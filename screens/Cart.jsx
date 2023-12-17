import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../redux/constants/cartConstant'

// export const cartItems=[ // we will fetch it from cart reducer later for now let us make it hard coded
//     {
//         name:"Macbook",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is product id",
//         stock:50,
//         price:150000,
//         quantity:3
//     },
//     {
//         name:"Bag",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is product id 1",
//         stock:100,
//         price:10000,
//         quantity:30
//     },
//     {
//         name:"Nike run",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is product id 2",
//         stock:10,
//         price:1000,
//         quantity:3
//     },
//     {
//         name:"Macbook",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is prsaasct id",
//         stock:50,
//         price:150000,
//         quantity:3
//     },
//     {
//         name:"Bag",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is sasauct id 1",
//         stock:100,
//         price:10000,
//         quantity:30
//     },
//     {
//         name:"Nike run",
//         image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         product:"this is sasdasdduct id 2",
//         stock:10,
//         price:1000,
//         quantity:3
//     }
// ]


const Cart = () => {

    const navigate = useNavigation();
    const dispatch=useDispatch();

    const {cartItems} = useSelector((state)=>state.cart); // we have created a store with name cart 
    // console.log(cartItems);
    const incrementHandler=(id,name,price,image,stock,quantity)=>{
        const newQuantity = quantity+1;
        if(stock <= quantity){
            return Toast.show({
                type:"error",
                text1:"Maximum Value Added"
            });
        }
        // console.log("dispatch add to cart with ", id,name,price,image,stock,quantity);
        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:id,
                name:name,
                price:price,
                image:image,
                stock:stock,
                quantity:newQuantity
            }
        })
    }
    
    
    const decrementHandler=(id,name,price,image,stock,quantity)=>{
        const newqty = quantity-1;
        if(quantity<=1){
            console.log("dispatch remove from cart");
            return  dispatch({
                type:REMOVE_FROM_CART,
                payload:{
                    id:id
                }
            })
        }
        console.log("dispatch add to cart with ", id,name,price,image,stock,quantity);
        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:id,
                name:name,
                price:price,
                image:image,
                stock:stock,
                quantity:newqty
            }
        })
    }
    

    return (
        <View style={{
            ...defaultStyle,
            padding: 0
        }}>

            {/* Header */}
            <Header back={true} emptyCart={true} />

            {/* Heading */}
            <Heading text1='Shopping' text2='Cart' containerStyle={{ paddingTop: 70, marginLeft: 35 }} />

            <View
                style={{
                    paddingVertical: 20,
                    flex: 1
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItems.length>0?cartItems.map((item,index)=>(
                            <CartItem 
                            navigate={navigate}
                            key={item.product} 
                            id={item.product} 
                            name={item.name} 
                            stock={item.stock}
                            price={item.price}
                            imgSrc={item.image}
                            index={index}
                            qty={item.quantity}
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                        />
                        )):(
                            <Text style={{
                                textAlign:'center',
                                fontSize:18,
                                fontWeight:"500"
                            }}>
                                No Items Yet
                            </Text>
                        )
                    }
                </ScrollView>
                
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 35
                }}
            >
                <Text>5 Items</Text>
                <Text>₹1500</Text>
            </View>
            <TouchableOpacity onPress={cartItems.length>0?()=>navigate.navigate("confirmorder"):null}>
                <Button icon={'cart'}
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}
                    textColor={colors.color2}
                >
                    Check Out
                </Button>
            </TouchableOpacity>
        </View>
    )
}

export default Cart