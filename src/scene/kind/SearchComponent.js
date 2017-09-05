import React, { PureComponent } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'

class SearchComponent extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Image style={styles.img} source={require('../../img/Home/icon_homepage_search.png')}/>
                    <Text style={styles.text}>搜索你的孕期必备</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        width: screen.width,
        height: screen.width * 88 / 750,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    item: {
        
        marginRight: 30,
        marginLeft: 30,
        height: screen.width * 88 / 750  - 20,
        backgroundColor: color.deaultBackground,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        borderRadius: (screen.width * 88 / 750)
    },
    img: {
        width: 15,
        height: 15,
    },
    text: {
        fontSize: 11,
        marginLeft: 9,
    }
})

export default SearchComponent;