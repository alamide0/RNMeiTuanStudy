import React, {PureComponent} from 'react'

import {StyleSheet, View} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'
import HomeGridItem from './HomeGridItem'


class HomeGridView extends PureComponent{
    static defaultProps = {
        infos: []
    }

    render(){
        return (
            <View style={styles.container}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        // onPress={() => this.props.onGridSelected(index)}
                        />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: color.border
    },
});

export default HomeGridView;