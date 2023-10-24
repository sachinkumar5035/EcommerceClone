import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { colors } from '../styles/style';

const screenWidth = Dimensions.get('screen').width;

const Chart = ({inStock=0,outOfStock=0}) => {

    const data = [
        {
            name:"out of stock",
            population:outOfStock,
            color:colors.color1_light,
            legendFontColor:colors.color2
        },
        {
            name:"In stock",
            population:inStock,
            color:colors.color1_light2,
            legendFontColor:colors.color2
        },
    ]

    const chartConfig={
        color:(opacity=1)=>`rgba(26,255,146,${opacity})`
    }


    return (
        <View>
            <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={colors.color3}
                paddingLeft={"15"}
                center={[10, 0]}
                absolute
            />
        </View>
    )
}

export default Chart