import React,{PureComponent} from 'react'
import {StyleSheet, FlatList, View} from 'react-native'
import SpecialChoiceCell from './SpecialChoiceCell'
// import FlatListVerticalDivider from '../../widget/FlatListVerticalDivider'

class SpecialChoiceComponent extends PureComponent{


    
    render(){

        let{items}=this.props;

        return(
            <FlatList
                horizontal={true}
                data={items}
                keyExtractor={(item,index) => index}
                renderItem={({item, index}) => <SpecialChoiceCell info={item}/>}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{width: 100, height: 300, backgroundColor: '#FFFFFF'}}/>}
                ListHeaderComponent={() => <View style={{width: 10}}/> }
            />
        )
    }
}

const styles=StyleSheet.create({

});

export default SpecialChoiceComponent;