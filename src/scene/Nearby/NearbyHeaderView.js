import React, {PureComponent} from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'
import {Paragraph} from '../../widget/Text'

class NearbyHeaderView extends PureComponent{
    static defaultProps = {
        onSelected: () =>{ }
    }
    render(){
        return(
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        style={[{ backgroundColor: this.props.selectedIndex === i ? '#FE566D' : 'white'}, style.item]}
                        key={i}
                        onPress={()=> this.props.onSelected(i)}
                    >
                    <Paragraph
                        style={{color: this.props.selectedIndex === 1 ? 'white':'#555555'}}
                    >
                        {this.props.titles[i]}
                    </Paragraph>

                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel,
        borderColor: color.border
    },
});

export default NearbyHeaderView;