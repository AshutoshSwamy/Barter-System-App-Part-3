import React , {Component} from 'react';
import { StyleSheet, Text, View , KeyboardAvoidingView, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            firstName : '',
            lastName : '',
            phone : '',
            address : '',
            confirmPassword : '',
            isModalVisible : false
        }
    }

    userLogin = (email , password)=>{

        firebase.auth().signInWithEmailAndPassword(email , password)
        .then(()=>{

            return alert("Login Successfull")
        })
        
        .catch((error)=>{

            var errorCode = error.code
            var errorMessage = error.message

            return alert(errorMessage)
        })
    }

    userSignUp = (email , password)=>{

        firebase.auth().createUserWithEmailAndPassword(email , password)
        .then((response)=>{

            return alert("Sign Up Successfull")
        })

        .catch((error)=>{

            var errorCode = error.code
           var errorMessage = error.message

           return alert(errorMessage)
        })
    }

    render(){

        return(

        <KeyboardAvoidingView style = {{
            alignItems : "center",
            marginTop : 50,

        }}>
            <View>
                <Text style = {styles.title}> Barter System App </Text>
            </View>
            
        <View>
            <TextInput styles = {styles.loginBox}
            placeholder = "Email ID"
            keyboardType = "email-address"
            onChangeText = {(text)=>{
                this.setState({
                    email : text,
                })
            }}
            />

<TextInput styles = {styles.loginBox}
            placeholder = "Password"
            secureTextEntry = {true}
            onChangeText = {(text)=>{
                this.setState({
                    password : text,
                })
            }}
            />

<TextInput styles = {styles.firstname}
            placeholder = "First Name"
            secureTextEntry = {false}
            onChangeText = {(text)=>{
                this.setState({
                    firstName : text,
                })
            }}
            />

<TextInput styles = {styles.lastname}
            placeholder = "Last Name"
            secureTextEntry = {false}
            onChangeText = {(text)=>{
                this.setState({
                    lastName : text,
                })
            }}
            />

<TextInput styles = {styles.phone}
            placeholder = "Contact No."
            secureTextEntry = {false}
            onChangeText = {(text)=>{
                this.setState({
                    phone : Number,
                })
            }}
            />

<TextInput styles = {styles.address}
            placeholder = "Residential Address"
            secureTextEntry = {false}
            onChangeText = {(text)=>{
                this.setState({
                    address : text,
                })
            }}
            />

<TextInput styles = {styles.loginBox}
            placeholder = "Confirm Password"
            secureTextEntry = {true}
            onChangeText = {(text)=>{
                this.setState({
                    confirmPassword : text,
                })
            }}
            />

            <TouchableOpacity style = {styles.loginButton}
            onPress = {()=>{
                this.userLogin(this.state.email , this.state.password)
            }}
            >
                <Text style = {{textAlign : "center"}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.loginButton}
            onPress = {()=>{
                this.userSignUp(this.state.email , this.state.password)
            }}
            >
                <Text style = {{textAlign : "center"}}>Sign Up</Text>
            </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>

        )
        
    }
}

const styles = StyleSheet.create({
    loginBox: {
      width : 400,
      height  : 100,
      fontSize : 20,
      borderWidth : 1.5,
      padding : 10,
    },

    loginButton : {
        width : 100,
        height : 40,
        borderWidth : 1,
        marginTop : 20,
        padding : 10,
        borderRadius : 10,
    },

    title : {
        fontSize : 20,
        fontFamily : 'Comic Sans MS',
        },
})