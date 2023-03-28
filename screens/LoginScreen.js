import React,{Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

export default class LoginScreen extends Component{ 

 signInWithGoogleAsync = async () =>{
   try{
    const result = await Google.logInAsync({
        behaviour:"web",
        androidClientId:"301365806884-h73okp5din00228cdi5snpjsl5icrqns.apps.googleusercontent.com",
        iosClientId:"301365806884-fmmnmhnv4483vmlq6gvnusd1lfsa659q.apps.googleusercontent.com",
        scopes:["profile","email"]
    })
   }
   catch(e){
    console.log(e.message)
    return {error:true}
   }
}

 checkIfLoggedIn =()=>{
    firebaseConfig.auth().onAuthStateChanged((user=>{
        if(user){
            this.props.navigation.navigate("DashBoardScreen")
        }
        else{
            this.props.navigation.navigate("LoginScreen")
        }
    }))
 }

 componentDidMount(){
    checkIfLoggedIn()
 }


  render(){
     return(
        <View style={{justifyContent:"center", alignItems:"center", flex:1, backgroundColor:"dark blue"}}>
            <View>
                <Text>Spectagram App</Text>
            </View>
        <View style={{height:50, width:10, alignItems:"top"}}>
           <Image source={require("../assets/assets/logo.png")}/>
        </View>
            <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.signInWithGoogleAsync()}}>
               <Text>Log in using google</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
      alignItems:"center",
      justifyContent:"center",
      borderRadius:30,
    },
})