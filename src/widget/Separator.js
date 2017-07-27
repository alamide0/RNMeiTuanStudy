import React, {PureComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import screen from '../common/screen'
import color from './color'

class Separator extends PureComponent{
    render(){
        return (
            <View style={[styles.line, this.props.style]}/>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    }
});

export default Separator;