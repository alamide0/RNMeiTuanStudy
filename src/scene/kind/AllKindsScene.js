import React, { PureComponent } from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LeftItemsComponent from './LeftItemsComponent'
import color from '../../widget/color'
import screen from '../../common/screen'
import SearchComponent from './SearchComponent'
import RightComponent from './RightComponent'
import api from '../../api'

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
            rightItems: [],
        }
    }

    componentDidMount() {
        this.getLeftItems();
        this.getRightItems();
    }

    async getRightItems(){
        let response = await fetch(api.find);
        let json = await response.json();

        let dataList = json.data.yuedu.map((info) => {
            return {
                title: info.title,
                img: info.image,
            }
        })

        dataList.sort(() => 0.5 - Math.random());

        let info = dataList[0];
        for(let i=0; i<20; i++){
           dataList.push(info)
        }

    
        this.setState({
            rightItems: dataList,
        })
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
        });
        this.getRightItems();
    }

    render() {
        return (
            <View style={styles.outer}>
                <SearchComponent />
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <LeftItemsComponent items={this.state.leftItems} onPress={this.onLeftItemPress.bind(this)} />
                    </View>
                   <RightComponent items={this.state.rightItems} title={this.state.rightContentTitle}/>
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
        width: screen.width * 550 / 750,
        flexDirection: 'column',
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