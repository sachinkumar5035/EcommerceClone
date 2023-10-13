import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'

const cartItems=[ // we will fetch it from cart reducer later for now let us make it hard coded
    {
        name:"Macbook",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is product id",
        stock:50,
        price:150000,
        quantity:3
    },
    {
        name:"Bag",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is product id 1",
        stock:100,
        price:10000,
        quantity:30
    },
    {
        name:"Nike run",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is product id 2",
        stock:10,
        price:1000,
        quantity:3
    },
    {
        name:"Macbook",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is prsaasct id",
        stock:50,
        price:150000,
        quantity:3
    },
    {
        name:"Bag",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is sasauct id 1",
        stock:100,
        price:10000,
        quantity:30
    },
    {
        name:"Nike run",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        product:"this is sasdasdduct id 2",
        stock:10,
        price:1000,
        quantity:3
    }
]


const Cart = () => {

    const incrementHandler=(id,qty,stock)=>{
        console.log("incresing ",id,qty,stock);
    }
    
    const decrementHandler=(id,qty)=>{
        console.log("decresing ", id, qty);
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
                        cartItems.map((item,index)=>(
                            <CartItem 
                            key={item.product} 
                            id={item.product} 
                            name={item.name} 
                            stock={item.stock}
                            amount={item.price}
                            imgSrc={item.image}
                            index={index}
                            qty={item.quantity}
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                        />
                        ))
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
            <TouchableOpacity>
                <Button icon={'cart'}
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}
                    textColor={colors.color2}
                >
                    Check out
                </Button>
            </TouchableOpacity>
        </View>
    )
}

export default Cart