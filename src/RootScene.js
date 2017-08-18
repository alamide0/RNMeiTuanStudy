import React, {PureComponent} from 'react'
import { StatusBar } from 'react-native'

import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation'

import HomeScene from './scene/Home/HomeScene'
import MineScene from './scene/Mine/MineScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'
import AllKinds from './scene/kind/AllKindsScene'

import TabBarItem from './widget/TabBarItem'
import color from './widget/color'


function getCurrentRouteName(navigationState){
    if(!navigationState) {
        return null;
    }

    const route = namespace.routes[navigationState.index];

    if(route.routes){
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class RootScene extends PureComponent{
    constructor(){
        super()

        StatusBar.setBarStyle('light-content')
    }

    render(){
        return(
            <Navigator
                // onNavigationStateChange={
                //     (prevState, currentState) => {
                //         const currentScene = getCurrentRouteName(currentState);
                //         const previousScene = getCurrentRouteName(prevState);
                //     }
                // }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home:{
            screen: AllKinds,
            navigationOptions:({navigation}) =>     ({
                tabBarLabel: '团购',
                tabBarIcon:({focused, tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected2x.png')}
                    />
                )
            })
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected2x.png')}
                    />
                )
            }),
        },

        Order: {
            screen: OrderScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_order2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected2x.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true, 
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style:{backgroundColor: '#ffffff'}
        },
    }
)

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        }
    }
);

export default RootScene;