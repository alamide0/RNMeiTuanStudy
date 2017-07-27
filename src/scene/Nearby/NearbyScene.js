import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'


class NearbyScene extends PureComponent{
    render(){
         return(
             <View>
                 <Text style={{ fontSize:20}}>附近</Text>
             </View>
         );   
    }
}

export default NearbyScene;