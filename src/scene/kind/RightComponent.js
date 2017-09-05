import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import screen from '../../common/screen'
import RightComponentCell from './RightComponentCell'
import color from '../../widget/color'

class RightComponent extends PureComponent {
    render() {

        let { items, title } = this.props;
        let cells = [];
        for (let i = 0; i < items.length; i++) {
            cells.push(
                <RightComponentCell info={items[i]} key={i} />
            );
        }

        return (
            <View style={styles.outer}>
                <View style={styles.top}>
                    <Text style={styles.title}>---{title}---</Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        {cells}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
    },
    outer: {
        flex: 1,
        backgroundColor: color.white,
        alignItems: 'center'
    },
    top: {
        height: screen.width * 100 / 750,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        color: color.hintColor,
    }

})

export default RightComponent;