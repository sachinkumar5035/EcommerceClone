import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { processOrder } from '../redux/action/orderAction'

const OrderItem = ({
    id,
    price,
    address,
    status,
    orderedOn,
    paymentMethod,
    updateHandler,
    admin = false,
    loading,
    index = 0
}) => {

    const dispatch = useDispatch();


    updateHandler = (id)=>{
        // console.log("update handler called",id);
        dispatch(processOrder(id));
    }

    return (
        <View style={{
            ...styles.container,
            backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3
        }}
        >
            <Text style={{
                ...styles.text,
                backgroundColor: index % 2 === 0 ? colors.color3 : colors.color1,
            }}
            >
                Id-#{id}
            </Text>

            <TextBox index={index} title={"Address"} value={address} />
            <TextBox index={index} title={"Ordered On"} value={orderedOn} />
            <TextBox index={index} title={"Price"} value={price} />
            <TextBox index={index} title={"Status"} value={status} />
            <TextBox index={index} title={"Payment Method"} value={paymentMethod} />
            {
                admin && <Button
                    icon={'update'}
                    mode={'outlined'}
                    textColor={index % 2 === 0 ? colors.color3 : colors.color2}
                    style={{
                        width:150,
                        alignSelf:'center',
                        marginTop:10
                    }}
                    onPress={()=>updateHandler(id)}
                    loading={loading}
                    disabled={loading}
                >
                    Update
                </Button>
            }
        </View>
    )
}


const TextBox = ({ title, value, index }) => (
    <Text
        style={{
            marginVertical: 5,
            color: index % 2 === 0 ? colors.color3 : colors.color2
        }}
    >
        <Text style={{ fontWeight: "900" }}>{title} - </Text> {title === 'Price' ? "₹" : ""}{value}

    </Text>
)

const styles = StyleSheet.create({

    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5
    },
    text: {
        color: colors.color2,
        fontSize: 16,
        fontWeight: "900",
        marginHorizontal: -20,
        marginTop: -20,
        marginBottom: 10,
        paddingVertical: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20
    }
})



export default OrderItem