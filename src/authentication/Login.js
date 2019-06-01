// Login.js
import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert, StatusBar
} from 'react-native'
import {
  UIActivityIndicator,
} from 'react-native-indicators';
import {Emailvalidate ,Mobilevalidate,EngineeringSubStream} from '../../constant'
import firebase from 'react-native-firebase'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Feather';
export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = { phoneNumber: '', progress_icon: 'none' }
  componentDidMount(){
    SplashScreen.hide();
    this.authListener=firebase.auth().onAuthStateChanged(user => {     
      if(user!=null){          
        this.userProfileCheck(user.phoneNumber) 
       }
       
    })
  }
  componentWillUnMount(){
    firebase.auth().removeAuthTokenListener(this.authListener);
  }
  userProfileCheck(phoneNumber) {    
    firebase.database().ref('AppUsers/').child('student'+phoneNumber).child("Streams").once('value', (snapshot) => {
      let data = snapshot.val();
      
      if (data != null) {  
        var flag=true;      
        EngineeringSubStream.map((value,index)=>{
          if(value.name==data){
            this.props.navigation.navigate('ChooseCollegeScreen',{initialStream:data,initialStreamIndex:index,initialStreamKey:value.streamKey})
          }
        })
       
      } else {
        this.props.navigation.navigate('CreateProfileScreen')
      }
    })
  }
  _OTP_Send(phoneNumber) { 
    // return this.props.navigation.navigate('ChooseStreamScreen')//ChooseStreamScreen
    // return this.props.navigation.navigate('CreateProfileScreen')
    if(!Mobilevalidate(phoneNumber)) return this._custom_alert('Invalid number. Give only 10 digit number')
    if(phoneNumber.length!=10) return this._custom_alert('Invalid number. Give only 10 digit number')   
    phoneNumber='+91'+phoneNumber;
    var primary_key="student"+phoneNumber;
    this.setState({ progress_icon: 'flex' })
    firebase.database().ref('AppUsers/').child(primary_key).once('value', (snapshot) => {
     let data = snapshot.val();     
     if(data==null){
      this.props.navigation.navigate('SignupScreen')
     }else{
      if (phoneNumber != "") {        
        firebase.auth().signInWithPhoneNumber(phoneNumber)
          .then(confirmResult => this._confirmCode(confirmResult))
          .catch(error => this._confirmCode('error'));
      } else {
       
        this._custom_alert('Invalid number. Give only 10 digit number')
      }
     }
    })    
  }

  _confirmCode(code) {

    this.setState({ progress_icon: 'none' })
    if (code == 'error') {     
      this._custom_alert('Sign In With Phone Number Error')
    } else {
      this.props.navigation.navigate('OTP_p_Screen', { code: code, phoneNumber: "+91"+this.state.phoneNumber })
    }
  }
  _custom_alert(title){
    Alert.alert(
      'KAREERZ',
      title,
      [ 
        
        {text: 'OK', onPress: () => console.log('ok'), style: 'ok'},
        {text: 'CANCEl', onPress: () => console.log('cancel'), style: 'cancel'}
      ]
    );
  }
  render() {
    return (

      <ImageBackground style={styles.container}
        source={require('../../assets/images/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
      >

        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={{ fontSize: 24, color: 'black', marginTop: 20 }}>SIGN IN</Text>
        <Text style={{ fontSize: 15, color: '#1795e6', marginBottom: 8 }}>With Your Phone Number</Text>
        <View style={styles.phone_input}>
          <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name="phone-call"
              color={'#1795e6'}
              size={25}
            />
          </View>
          <TextInput style={styles.iteminput}
            underlineColorAndroid="transparent"
            placeholder="Phone Number"
            placeholderTextColor="black"
            autoCapitalize="none"
            keyboardType='phone-pad'
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={this.state.phoneNumber}
          />
        </View>
        <TouchableOpacity
          style={styles.otp_send}
          onPress={() => this._OTP_Send(this.state.phoneNumber)}
        >
          <Image
            style={styles.otp_img}
            source={require('../../assets/images/OTP.png')}
          />
          <Text style={{ fontSize: 18, color: 'black' }}>SEND OTP</Text>
        </TouchableOpacity>
        <View style={{ height: 80 }}></View>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 20 }}
          onPress={() => this.props.navigation.navigate('SignupScreen')}
        >
          <Text style={{ fontSize: 18, color: '#1795e6' }}>Sign Up Now</Text>
        </TouchableOpacity>
        <View style={{ display: this.state.progress_icon, width: '100%', alignItems: 'center', marginTop: 50 }}>
          <UIActivityIndicator color='#1795e6' style={styles.ActivityIndicatorStyle} />
        </View>
      </ImageBackground>

    )
  }
}
const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //position:'absolute',    
  },
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'white'
  },
  logo: {
    width: 200,
    height: 80,
  },
  phone_input: {
    width: 280,
    height: 50,
    backgroundColor: '#f2f6f9',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: 20
  },
  otp_send: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  otp_img: {
    height: 80,
    width: 80,

  },
  item: {
    width: "80%",
    height: 55,
    flexDirection: 'row',
    margin: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,

    justifyContent: 'center',

  },
  iteminput: {
    width: "80%",
    paddingLeft: 20,
    fontSize: 18,
  },
  itemimage: {
    marginTop: 12,
    height: 25,
    width: 25,
  },
  button: {
    backgroundColor: "#79371A",
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20,

  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Zawgyi'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})