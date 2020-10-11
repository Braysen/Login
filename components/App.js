//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../images/bg.png'
import Loading from './Loading'


// create a component
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBUfib9BsCA8CphKwhqKNkSEv7IR2noZwo",
      authDomain: "loginfirebase-e9e81.firebaseapp.com",
      databaseURL: "https://loginfirebase-e9e81.firebaseio.com",
      projectId: "loginfirebase-e9e81",
      storageBucket: "loginfirebase-e9e81.appspot.com",
      messagingSenderId: "723408842178",
      appId: "1:723408842178:web:e8929eea29f6a07c2ffa5b",
      measurementId: "G-JR7GS8GM1J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
