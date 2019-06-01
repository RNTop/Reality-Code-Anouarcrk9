
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import AppMain from './src/App';
//import AppMain from './src/App';
import DropdownAlert from 'react-native-dropdownalert';
import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
export default class App extends Component {
  componentDidMount(){
    this.checkPermission();
    this.createNotificationListeners();
    this.mytoken();
    
  }
  mytoken(){
    firebase.messaging().getToken()
  .then(fcmToken => {
    if (fcmToken) {
      this.setState({token:fcmToken})
     //alert(fcmToken)
    } else {
      // user doesn't have a device token yet -- **my problem is here**
    } 
  });
  }
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
      //  alert('ok token')
    } else {
        this.requestPermission();
        alert('here')
    }
   
  }
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken', value);
    
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
           // alert('fcm')
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }
async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
  // firebase.messaging.RemoteMessage//sendMessage()
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        firebase.notifications().displayNotification(
          notification
          )
       if(title){
       this.showAlert(title, body);
       }
       
    });
   
  
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        if(title){
          this.showAlert(title, body);
         }
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        if(title){
          this.showAlert(title, body);
         }
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }
  showAlert(title, body) {
    this.dropdown.alertWithType('success', title, body, 4000000);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor="red" barStyle='light-content' /> */}
        <AppMain/>
        <DropdownAlert ref={ref => this.dropdown = ref} 
       successImageSrc={require('./src/assets/images/userAvatar.png')}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop:Platform.OS === 'ios' ? 20 : 0,
   width:'100%',
   height:'100%'   
  },
 
});
