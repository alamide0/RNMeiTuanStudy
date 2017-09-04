import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'

class LeftItemsCell extends PureComponent{

    render(){
        
        let {selected, index, info} = this.props
        let clickedStyle = selected ? {backgroundColor: color.white} : {};
        let clickedTextStyle = selected ? {fontSize: 14} : {};
        let indicator = selected && <View style={{position: 'absolute', left: 0,top: 15, backgroundColor: "#65C4AA", height: 20, width: 3}}></View>

        return(
            <TouchableWithoutFeedback style={[styles.container, clickedStyle]} onPress={() => this.props.onPress(info, index)}>
                <View style={[styles.container, clickedStyle]}>
                    <Text style={[styles.text,clickedTextStyle]}>{info.title}</Text>
                    {indicator}
                </View>
                
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.deaultBackground,
        width: screen.width * 200 / 750,
        height: screen.width * 100 / 750,
    },
    text: {
        color: color.kindTextColor,
        fontSize: 12,
    }
});

export default LeftItemsCell;