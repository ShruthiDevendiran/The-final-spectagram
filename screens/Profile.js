import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            light_theme:true,
        }
    }

    fetchUserDetails =async()=>{
       firebase
            .database()
            .ref('/users/' + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme;
            })
        this.setState({light_theme: theme === light? true:false})
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                
            </View>
        )
    }
}