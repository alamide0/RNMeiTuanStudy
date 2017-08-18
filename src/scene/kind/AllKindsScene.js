import React, { PureComponent } from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView ,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation'
import LeftItemsComponent from './LeftItemsComponent'
import color from '../../widget/color'
import screen from '../../common/screen'
import SearchComponent from './SearchComponent'

class AllKinds extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: '全部分类',
        headerStyle: { backgroundColor: color.theme },
    });

    constructor(props) {
        super(props)
        this.state = {
            leftItems: [],
            rightContentTitle: '',
        }
    }

    componentDidMount() {
        this.getLeftItems();
    }

    getLeftItems() {
        var items = ['毛衣', '裤子', '西瓜', '什么', '臭蛋', '屎壳郎', '螺蛳粉'];

        var data = items.map((info) => {
            return {
                title: info,
                clicked: false,
            }
        });

        data[0].clicked = true;
        // alert(data.length)
        this.setState({
            leftItems: data,
            rightContentTitle: data[0].title,
        });
    }

    onLeftItemPress(item) {
        this.setState({
            rightContentTitle: item.title,
        })
    }

    render() {
        return (
            <View style={styles.outer}>
                <SearchComponent/>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <LeftItemsComponent items={this.state.leftItems} onPress={this.onLeftItemPress.bind(this)} />
                    </View>
                    <ScrollView>
                    <View style={styles.rightContainer}>
                        <Text>{this.state.rightContentTitle}</Text>
                    </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    outer: {
        flexDirection: 'column',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    rightContainer: {
        flexDirection: 'column',
        backgroundColor: color.white,
        alignItems: 'center',
        flex: 1,
        height: 200
    },
    leftContainer: {
        width: screen.width * 200 / 750,
        flexDirection: 'column',
    },
});

// const AllKindsScene = StackNavigator(
//     {
//          All: { screen: AllKinds }
//     },
//     {
//         navigationOptions: {
//             // headerBackTitle: null,
//             headerTintColor: color.white,
//             showBack: true
//         }
//     }
// );

export default AllKinds;