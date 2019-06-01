

import React from 'react'
import {
  ImageBackground,
  ScrollView,
  StyleSheet, Text,
  TextInput, View,
  Button, Image, TouchableOpacity,
  Dimensions,
  Alert,

} from 'react-native'
import firebase from 'react-native-firebase'
import {Emailvalidate ,Mobilevalidate} from '../../constant'
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import CheckBox from 'react-native-check-box'

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    startName: '',
    email: '',   
    errorMessage: null,   
    phoneNumber: '',
    isChecked: false,
    FavoritCollege:{
      college01:"#000000",
      college02:"#000000",
      college03:"#000000",
      college04:"#000000",
      college05:"#000000",
      college06:"#000000",
      college07:"#000000",
      college08:"#000000",
      college09:"#000000",
      college10:"#000000",
      college12:"#000000",
      college13:"#000000",
      college14:"#000000",
      college15:"#000000",
      college16:"#000000",
      college17:"#000000",
      college18:"#000000"  

    }
  }
  
 _handleSignup(){
   const {startName,email,isChecked ,FavoritCollege}=this.state
   var phoneNumber=this.state.phoneNumber
   if(!Emailvalidate(email)) return this._customAlert('Email is Not Correct')
   if(!Mobilevalidate(phoneNumber)) return this._customAlert('Invalid number. Give only 10 digit number')   
   if(!isChecked) return this._customAlert('Please read Terms and Conditions and Privacy Policy')
   if(startName==""||email==""||phoneNumber=="") return this._customAlert('Please complete your profile!')
   if(phoneNumber.length!=10) this._customAlert('Invalid number. Give only 10 digit number')   
   phoneNumber='+91'+phoneNumber;
   var primary_key="student"+phoneNumber;   
   firebase.database().ref('AppUsers/').child(primary_key).once('value', (snapshot) => {
    let data = snapshot.val();
    if(data==null){
       var  userAvatar= 'https://kareerzgroup.tech/app/kareerz/assets/app_image/user.png';
        firebase.database().ref('AppUsers/').child(primary_key).set(
           {startName,email,phoneNumber,userAvatar,FavoritCollege}
        ).then((data) => {       
          this._customAlert('Welcome')
        }).catch((error) => {
           this._customAlert('Your signature not successful')
        })
    }else{
      this._customAlert('Your profile already have. Please contact Admin')
    }
   });  
   
 }
 _customAlert(title){
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
      <ScrollView style={{ height: '100%', width: Dimensions.get('window').width, backgroundColor: 'white' }}>

        <ImageBackground style={styles.container}
          source={require('../../assets/images/background.png')}
          imageStyle={{ resizeMode: 'stretch' }}
        >

          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={{ fontSize: 24, color: 'black', marginTop: 20 }}>SIGN UP</Text>
          <Text style={{ fontSize: 15, color: '#1795e6', marginBottom: 8 }}>One Stop Solution For Educational Institute</Text>
          <View style={styles.phone_input}>
            <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <IconAntDesign
                name="user"
                color={'#1795e6'}
                size={25}
              />
            </View>

            <TextInput style={styles.iteminput}
              underlineColorAndroid="transparent"
              placeholder="Full Name"
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={startName => this.setState({ startName  })}
              value={this.state.startName}
            />
          </View>
          <View style={styles.phone_input}>
            <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <IconOcticons
                name="mail"
                color={'#1795e6'}
                size={25}
              />
            </View>

            <TextInput style={styles.iteminput}
              underlineColorAndroid="transparent"
              placeholder="Email Address"
              placeholderTextColor="black"
              autoCapitalize="none"              
              onChangeText={email=> this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={styles.phone_input}>
            <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <IconFeather
                name="phone-call"
                color={'#1795e6'}
                size={25}
              />
            </View>

            <TextInput style={styles.iteminput}
              underlineColorAndroid="transparent"
              placeholder="+91 Phone Number"
              placeholderTextColor="black"
              autoCapitalize="none"
              keyboardType='phone-pad'
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
          </View>
          <View style={styles.chekbox}>
            <CheckBox

              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                })
              }}
              isChecked={this.state.isChecked}


            />
            <View>
              <Text style={styles.chekboxtext}>By clicking SIGN UP, I agree to Solofon </Text>
              <TouchableOpacity>
                <Text style={[styles.chekboxtext, { borderBottomColor: "black", borderBottomWidth: 1, fontWeight: 'bold' }]}>Terms and Conditions and Privacy Policy</Text>
              </TouchableOpacity>
            </View>


          </View>
          <TouchableOpacity
            style={styles.otp_send}
            onPress={() => this._handleSignup()}
          >
            <Image
              style={styles.otp_img}
              source={require('../../assets/images/check.png')}
            />
            <Text style={{ fontSize: 18, color: 'black' }}>SIGN UP AND PROCEED</Text>
          </TouchableOpacity>
          <View style={{ height: 80 }}></View>

          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          >
            <Text style={{ fontSize: 18, color: 'black' }}>Already A member Please</Text>
            <Text style={{ fontSize: 18, color: '#1795e6' }}>Sign In</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: "100%",
    height: Dimensions.get('window').height - 24,
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
    marginBottom: 5
  },
  otp_send: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  otp_img: {
    height: 70,
    width: 70,
    borderRadius: 35,

  },
  chekbox: {
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: "center",

    justifyContent: 'center',
  },
  chekboxtext: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 14,
    width: 265,
    color: 'black'
  },
  item: {
    width: "80%",
    height: 55,
    flexDirection: 'row',
    margin: 10,
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