import React, {PureComponent} from 'react'
import {View, FlatList, Text} from 'react-native'

class PagingEnableTest extends PureComponent{

    constructor(props){
        super(props)
        this.state={
            index: 0,
            lastX: 0,
            lastt: 0     
        }
    }

    dealOffset(e){
        let x = e.nativeEvent.contentOffset.x;
        let lastX = this.state.lastX
        let xxxx = x - lastX

        let index = this.state.index

        let off = x;
       
       
        let base = (index*2+1)*100/2
       
        let t = Math.floor(xxxx/100)
        let lastt = this.state.lastt
        let oo = t - lastt

       
        this.list.scrollToOffset({animated: true, offset: (lastt + t)*200})
        this.setState({
            lastX: (lastt + t)*200,
            lastt: lastt + t
        })
    }

    render(){
        let array = [1,2,3,4,5,6]
        
        return(
            <FlatList
                ref={(e) => this.list = e}
                horizontal
                data={array}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => <View style={{width: 200, height: 100, backgroundColor: "#FF0000", justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize: 30}}>{item}</Text>
                    </View>}
                onScrollEndDrag={(e)=>this.dealOffset(e)}
                

            />
        )
    }
}

export default PagingEnableTest