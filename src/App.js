import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';
import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, ImageBackground, TouchableOpacity, YellowBox, Dimensions, WebView, ScrollView, Button } from 'react-native';

//-------------------------Auth flow-------------------------------------
// import LoginScreen from './authentication/studentPart/Login'
// import SignupScreen from './authentication/studentPart/SignUp'

//-------------------------Main flow-------------------------------------
import Home from './components/Home'
import Scanner from './components/Scanner'
import Option from "./components/Option"
import ScanResult from './components/Scanner/ScanResult'


const drwerScreenWidth=Dimensions.get('window').width - 130

const AuthStack =createStackNavigator ({
  
  Home:{screen:Home}
 
},
);
const MainStack = createStackNavigator({
  //ScanResult:{screen:ScanResult},  
  Home:{screen:Home},
  Scanner:{screen:Scanner},
  ScanResult:{screen:ScanResult},
  Option:{screen:Option},
 
},
{
  navigationOptions: ({
    navigation
  }) => {
    return {
      header: null,
    };
  }
}
);

export default AppStack = createDrawerNavigator(
  
  { 
    MainStack: {
    screen: MainStack, 
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    },
    // AuthStack: {
    //   screen: AuthStack,
    //   navigationOptions: {
    //     drawerLockMode: 'locked-closed'
    //   }
    // },      
    },
   
    
    
    

  },
  
  {
   // contentComponent: StudentSideMenu,
    drawerWidth: drwerScreenWidth
  }


);

const styles = StyleSheet.create({


  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  useravatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  useravatarBackImage: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userText: {
    color: '#1785e6',
    fontSize:16
  },
  represent: {
    backgroundColor: '#1785e6',
    color: 'white',
    padding:10,
    borderRadius:20,
    height:40,
    width:200,
    textAlign:'center',
    margin:10
  },
  iconView: {
    marginTop:30
  },
  item: {
    flexDirection: 'row',
    margin:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  itemText: {
    color: 'black',
    width:'70%',
    paddingLeft:10,
    fontSize:12
  },
  logout:{
    width:170,
    height:40,
    borderRadius:20,
    backgroundColor: '#1785e6',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    position:'absolute',
    bottom:50,
    elevation:5
  },
  logoutText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    marginLeft:10,
    
  }

});
