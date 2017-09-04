import React, {PureComponent} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'
import SizeManager from './SizeManager'

class RightComponentCell extends PureComponent{
    render(){

        let {info} = this.props;
     

        return(
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: info.img}} resizeMode='contain'/>
                <Text style={styles.text}>{info.title}</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: color.white,
        width: (SizeManager.rightContainerWidth-20) / 3 ,
        height: (SizeManager.rightContainerWidth-10) / 3,
        alignItems: 'center'
    },
    img: {
        width: SizeManager.rightContainerWidth / 3 - 40,
        height: SizeManager.rightContainerWidth / 3 - 40,
        
    },
    text:{
        fontSize: 10,
        marginTop: 5,
    }
})

export default RightComponentCell;