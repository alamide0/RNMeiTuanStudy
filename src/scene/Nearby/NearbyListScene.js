import React, {PureComponent} from 'react'
import {StyleSheet, ListView} from 'react-native'

import api from '../../api'
import RefreshState from '../../widget/RefreshState'
import RefreshListView from '../../widget/RefreshListView'
import NearbyHeaderView from './NearbyHeaderView'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

class NearbyListScene extends PureComponent {
    listView: ListView

    state: {
        dataSource: ListView.DataSource,
        typeIndex: number
    }

    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

        this.state = {
            dataSource: ds.cloneWithRows([]),
            typeIndex: 0,
        }
    }

    componentDidMount() {
        this.listView.startHeaderRefreshing();
    }

    async requestData() {
        try{
            let response = await fetch(api.recommend)
            let json = await response.json()

            console.log(JSON.stringify(json));

            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            dataList.sort(() => {return 0.5 - Math.random()})

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            })

            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500);
        }catch(error){
            this.listView.endRefreshing(RefreshState.Failure)
        }
    }

    render() {
        return (
            <RefreshListView
                ref={(e) => this.listView = e}
                dataSource={this.state.dataSource}
                renderHeader={() => 
                    <NearbyHeaderView
                        titles={this.props.types}
                        selectedIndex={this.state.typeIndex}
                        onSelected={(index) => {
                            if (index != this.state.typeIndex){
                                this.setState({typeIndex: index})
                                this.listView.startHeaderRefreshing()
                            }
                        }
                        }
                    />
                }

                renderRow = {(rowData) => 
                    <GroupPurchaseCell
                        info={rowData}
                        onPress={() => {
                            this.props.navigation.navigate('GroupPurchase', {info: rowData})
                        }}       
                    />
                }

                onHeaderRefresh={() => this.requestData()}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default NearbyListScene;