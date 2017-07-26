import React, {PureComponent} from 'react'

import {StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'
import {Heading1,  Heading2, Paragraph} from '../../widget/Text'

class GroupPurchaseCell extends PureComponent{
    render(){
        let {info} = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0')
        return(
            <TouchableOpacity style={styles.container}>
                <Image source={{uri: imageUrl}} style={styles.icon}/>

                <View style={styles.rightContainer}>
                    <Heading1>{info.title}</Heading1>
                    <Paragraph numberOfLines={0} style={{marginTop: 8}}>{info.subtitle}</Paragraph>
                    <View style={{flex:1, justifyContent: 'flex-end'}}>
                        <Heading1 style={styles.price}>{info.price}元</Heading1>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    }
});

export default GroupPurchaseCell;