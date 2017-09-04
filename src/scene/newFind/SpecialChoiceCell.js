import React, {PureComponent} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'

class SpecialChoiceCell extends PureComponent{
    render(){

        let {info} = this.props;
        let price = info.price;
        let priceNum = price.slice(0, -2);
        let priceAft = price.slice(-2);
        return(
            <View style={styles.container}>
                <Image source={{uri: info.img}} style={styles.img} resizeMode='contain'/>
                <View style={styles.bottom}>
                    <View style={styles.bottom_top}>
                        <Text style={styles.name}>{info.name}</Text>
                        <View style={{flex: 1}}></View>
                        <Text style={styles.priceA}>{priceNum}</Text>
                        <Text style={styles.priceB}>{priceAft}</Text>
                    </View>
                    <View style={styles.bottom_bottom}>
                        <Text style={styles.introduction}>{info.introd}</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: screen.width - 20,
        height: (screen.width - 20) * 42 / 69 + 50,
    },
    img: {
        width: screen.width - 20,
        height: (screen.width - 20) * 42 / 69,
    },
    bottom: {
        width: screen.width - 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_top: {
        width: screen.width - 20,
        height: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottom_bottom: {
        width: screen.width - 20,
        height: 11,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 11,
        color: color._262626,
    },
    priceA: {
        fontSize: 12,
        color: color.findPrice,
    },
    priceB: {
        fontSize: 10,
        color: color.findPrice,
    },
    introduction: {
        fontSize: 8,
        color: color.hintColor,
        marginTop: 7,
    }
})

export default SpecialChoiceCell;