import React, {PureComponent} from 'React'
import {StackNavigator} from 'react-navigation'

import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native'

// import { color,  NavigationItem } from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import color from '../../widget/color'
import screen from'../../common/screen'
import {Paragraph} from '../../widget/Text'

class HomeScene extends PureComponent{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={style.searcherBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={style.searchIcon}/>
                 <Paragraph>赵小四</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem  
                icon = {require('../../img/Home/icon_navigationItem_message_white.png')}
                onPress={() => {

                }}
            />
        ),

        headerLeft: (
            <NavigationItem
                title='南京'
                titleStyle={{color: 'white'}}
                onPress={() => {

                }}
                />
        ),
        
        headerStyle: {backgroundColor: color.theme},
    });

    render(){
        return (<Text>Hello World</Text>)
    }
}

const style = StyleSheet.create({
    searcherBar:{
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon:{
        width: 20,
        height: 20,
        margin: 5,
    },
});




export default HomeScene;