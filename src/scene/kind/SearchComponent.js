import React, { PureComponent } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'

class SearchComponent extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Image style={{marginRight: 9}} source={require('../../img/Home/icon_homepage_search.png')}/>
                    <Text>搜索你的孕期必备</Text>
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
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: color.deaultBackground,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        borderRadius: (screen.width * 88 / 750)
    }
})

export default SearchComponent;