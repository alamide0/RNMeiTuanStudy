import React, { PureComponent } from 'React'
import { StackNavigator } from 'react-navigation'

import { TouchableOpacity, Image, StyleSheet, Text, View, FlatList } from 'react-native'

// import { color,  NavigationItem } from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import color from '../../widget/color'
import screen from '../../common/screen'
import { Paragraph } from '../../widget/Text'
import HomeMenuView from './HomeMenuView'
import api from '../../api'
import SpaceView from '../../widget/SpaceView'
import HomeGridView from './HomeGridView'
import {Heading2} from '../../widget/Text'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'


class HomeScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searcherBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>赵小四</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/Home/icon_navigationItem_message_white.png')}
                onPress={() => {

                }}
            />
        ),

        headerLeft: (
            <NavigationItem
                title='南京'
                titleStyle={{ color: 'white' }}
                onPress={() => {

                }}
            />
        ),

        headerStyle: { backgroundColor: color.theme },
    });

    state: {
        discounts: Array<Object>,
        dataList: Array<Object>,
        refreshing: boolean
    }

    constructor(props: Object) {

        super(props)
        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }

        {(this).requestData = this.requestData.bind(this)}
        {(this).renderHeader = this.renderHeader.bind(this)}
        {(this).keyExtractor = this.keyExtractor.bind(this)}
        {(this).renderCell = this.renderCell.bind(this)}

    }

    onMenuSelected(index: number) {
        alert(index)
    }

    componentDidMount() {
        this.requestData()
    }

    async requestDiscount() {
        try {
            let response = await fetch(api.discount)
            let json = await response.json()
            this.setState({ discounts: json.data })
        } catch (error) {
            alert(error)
        }
    }

    async requestRecommend() {
        try{
            let response = await fetch(api.recommend)
            let json = await response.json()

            let dataList = json.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname, 
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        }catch(error){
            this.setState({refreshing: false})
        }
    }

    renderCell(info: Object){
        return (
            <GroupPurchaseCell
                info={info.item}

            />
        )
    }

    keyExtractor(item: Object, index: number){
        return item.id
    }

    renderHeader(){
        return(
            <View>
                 <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected}></HomeMenuView>
                 <SpaceView />
                 <HomeGridView infos={this.state.discounts}/>
                 <SpaceView />
                 <View style={styles.recommendHeader}>
                    <Heading2>猜你喜欢</Heading2>
                 </View>
            </View>
        );
    }

    requestData() {
        this.setState({ refreshing: true })

        this.requestDiscount()
        this.requestRecommend()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searcherBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    recommendHeader:{
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
});




export default HomeScene;