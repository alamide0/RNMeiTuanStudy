import React from 'react'

import {Text, ReactElement, StyleSheet} from 'react-native';


export function Paragraph({style, ...props} : Object): ReactElement{
    return <Text style={[styles.p, style]}  {...props}/>
}

export function Heading2({style, ...props}: Object): ReactElement{
    return <Text style={[styles.h2, style]} {...props}/>
}

export function Heading1({style, ...props}: Object): ReactElement{
    return <Text style={[styles.h1, style]} {...props}/>
}
const styles = StyleSheet.create({
    p:{
        fontSize: 13,
        color: '#777777',
    },
    h2:{
        fontSize: 14,
        color: '#222222'
    },
    h1:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    }
});