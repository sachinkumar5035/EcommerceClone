import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/style'
import { useNavigation } from '@react-navigation/native'


const Header = ({back,emptyCart=false}) => {

    const navigate = useNavigation();

    const emptyCartHandler=()=>{
        console.log("empty cart handler");
    }

  return (
   <>
    {
        back && <TouchableOpacity style={{
            position:"absolute",
            left:20,
            top:20,
            zIndex:10
        }}
            onPress={()=>navigate.goBack()}

        >
            {/* <Avatar.Icon icon={"arrow-left"} color={colors.color3}/> */}
            <Text>
                Go Back
            </Text>
        </TouchableOpacity>
    }
    {
        <TouchableOpacity style={{
            position:"absolute",
            right:20,
            top:20,
            zIndex:10
        }}
            onPress={emptyCart?emptyCartHandler:()=>navigate.navigate("cart")}

        >
            {/* <Avatar.Icon icon={emptyCart?"delete-outline":"cart-outline"} color={colors.color3}/> */}
            <Text>
                Cart
            </Text>
        </TouchableOpacity>
    }
   
   </>
  )
}

export default Header