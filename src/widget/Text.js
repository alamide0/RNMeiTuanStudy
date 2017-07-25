import React from 'react'

import {Text, ReactElement, StyleSheet} from 'react-native';


export function Paragraph({style, ...props} : Object): ReactElement{
    return <Text style={[styles.p, style]}  {...props}/>
}


const styles = StyleSheet.create({
    p:{
        fontSize: 13,
        color: '#777777',
    },
});