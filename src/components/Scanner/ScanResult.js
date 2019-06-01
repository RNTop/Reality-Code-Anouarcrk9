// SignUp.js
import React from 'react'
import {
  ImageBackground,
  ScrollView,
  StyleSheet, Text,
  TextInput, View,
  Image,TouchableOpacity,
  Dimensions,
  Alert,
  FlatList,
  Platform, StatusBar
} from 'react-native'
//import firebase from 'react-native-firebase'
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Left,
  Right,
  Content,
  Input,
  Item,
  Card,
  CardItem,
  Body,  
  Footer
} from "native-base";
import styles from "./styles";
import {IconURL} from '../../constant'

import QRCode from 'react-native-qrcode';
const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height
export default class Home extends React.Component {
 static navigationOptions = {
    header: null
}; 
constructor(props) {
    super(props);
    this.state={
      userAvatar:require('../../assets/images/userAvatar.png'),
     
    }
      

  } 

  
  render() {
    const navigation = this.props.navigation;
    const params=this.props.navigation.state.params
   
    return (  
      <Container >
          <Header style={styles.header} androidStatusBarColor={'#ff0019'}>
           <Left>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back"  style={{color: "#fff", fontSize: 40}}/>
              </TouchableOpacity>
            </Left>                                 
            <Title style={{textAlign:'center',width:'80%'}}>Reality Code</Title>
            <Right>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Icon name="log-out"  style={{color: "#fff", fontSize: 25}} type={'Entypo'} />
              </TouchableOpacity>
            </Right>
          </Header>
         
          <Body style={{padding:20,backgroundColor:'#f8fefb'}}>
            <Card style={{width:screenWidth-40,height:'100%',alignItems:'center',borderRadius:10}}>
              <Image
              source={IconURL.RCard}
              style={{width:250,height:140,flex:1}}
              />
               <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                source={this.state.userAvatar}
                style={{width:120,height:120,borderRadius:60}}
                />
                <Text style={styles.p14B}>Anton</Text>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>                
                  <Image 
                 source={{uri:'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+params['content']+'&choe=UTF-8'}} 
                 style={{width:120,height:120}}
                  />
                       
               </View>  
                  
            </Card>
          </Body>          
          <Footer style={{backgroundColor:'#f8fefb',height:80}}>
          <View style={styles.footer}>
            <Left>
               <TouchableOpacity
                onPress={()=>{navigation.navigate('Home')}}
               >
                   <Icon                
                    name={'person'}
                    style={{color: "#fff"}}
                    />
               </TouchableOpacity>
            </Left>           
            <View style={styles.scanButton}>
            <TouchableOpacity
             onPress={()=>{navigation.navigate('Scanner')}}
            >
              <Image
              style={{width:50,height:50}}
              source={IconURL.scan}
              />
              </TouchableOpacity>
            </View>
                 
            <Right>
              <TouchableOpacity
               onPress={()=>{navigation.navigate('Option')}}
              >
                <Icon                
                name={'ios-keypad'}
                style={{color: "#fff"}}
                />
                </TouchableOpacity>
            </Right>
          </View>
          </Footer>
          
      </Container>
    
    )
  }
}
