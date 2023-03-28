import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';

export default class LogoutScreenScreen extends Component{
    componentDidMount(){
        firebase.signOut()
    }
    render(){
        return(
            <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
                <Text>Logout Screen</Text>
            </View>
        )
    }
}