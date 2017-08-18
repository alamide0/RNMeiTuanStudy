import React, {PureComponent} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import LeftItemsCell from './LeftItemsCell'

class LeftItemsComponent extends PureComponent{

    constructor(props){
        super(props)
        this.state={
            items: [],
            lastClicked: 0
        }
    }

    onPress(item, index){
        this.setState({
            lastClicked: index,
        })
        this.props.onPress(item);
    }

    // resetAllItemState(item){
    //     var position = this.state.items.indexOf(item);
    //     if(position === this.state.lastClicked){
    //         return;
    //     }
    //     var data = this.state.items.map((info)=>{
    //         return{
    //             title: info.title,
    //             clicked: info.clicked,
    //         }
    //     });

    //     for(let v of data){
    //         v.clicked = false;
    //     }
    //     data[position].clicked = true;
    //     this.setState({
    //         items: data,
    //         lastClicked: position,
    //     })

    //     this.props.onPress(item);
    // }

    componentWillReceiveProps(nextProps){
        var items = nextProps.items;
        
        if(items && items.length != this.state.items.length){
            this.setState({
                items: items,
            })
        }
    }

    keyExtractor(item, index){
        return index;
    }

    render(){
        return (
            <FlatList
                data={this.state.items}
                extraData={this.state.lastClicked}
                keyExtractor={this.keyExtractor} 
                showsVerticalScrollIndicator={false}
                renderItem={({item,index}) => <LeftItemsCell info={item} index={index} selected={this.state.lastClicked===index} onPress={this.onPress.bind(this)}/>}
            />
        );
    }
}

const styles = StyleSheet.create({
    
})

export default LeftItemsComponent;