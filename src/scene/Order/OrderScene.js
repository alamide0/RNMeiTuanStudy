import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native'
import DetailCell from '../../widget/DetailCell'
import SpaceView from '../../widget/SpaceView'
import api from '../../api'
import RefreshState from '../../widget/RefreshState'
import RefreshListView from '../../widget/RefreshListView'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import OrderMenuItem from './OrderMenuItem'

class OrderScene extends PureComponent {

    listView: ListView

    state: {
        dataSource: ListView.DataSource
    }

    static navigationOptions = ({navigation}) => ({
        title: '订单',
        headerStyle: {backgroundColor: 'white'},
    })

    componentDidMount(){
        this.listView.startHeaderRefreshing();
    }

    constructor(props: Object){
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    async requestData() {
        try{
            let response = await fetch(api.recommend)
            let json = await response.json()
            
            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            dataList.sort(() => {return 0.5 - Math.random() })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            })

            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500)
        }catch(error){
            this.listView.endRefreshing(RefreshState.Failure)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref={(e) => this.listView = e}
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) => 
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={()=>{
                                
                            }}
                        />

                    }
                    renderHeader={() => this.renderHeader()}
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    renderHeader() {
    return (
        <View style={styles.container}>
            <DetailCell title='我的订单' subtitle=' 全部订单' style={{ height: 38 }} />
            <View style={styles.itemContainer}>
                <OrderMenuItem title='待付款' icon={require('../../img/Order/order_tab_need_pay2x.png')} />
                <OrderMenuItem title='待使用' icon={require('../../img/Order/order_tab_need_use2x.png')} />
                <OrderMenuItem title='待评价' icon={require('../../img/Order/order_tab_need_review2x.png')} />
                <OrderMenuItem title='退款/售后' icon={require('../../img/Order/order_tab_needoffer_aftersale2x.png')} />
            </View>

            <SpaceView />

            <DetailCell title='我的收藏' subtitle='查看全部' style={{ height: 38 }} />
        </View>
    )
}
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        flexDirection: 'row'
    },
});

export default OrderScene;