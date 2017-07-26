import React, {PureComponent} from 'react'

import {StyleSheet, View} from 'react-native'
import color from './color'


class SpaceView extends PureComponent {
    render(){
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: color.background,
    },
});

export default SpaceView;