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

import {QRscanner} from 'react-native-qr-scanner';
const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height
export default class Home extends React.Component {
 static navigationOptions = {
    header: null
}; 
constructor(props) {
    super(props);
     this.state={
        flashMode: false,     
     }
      

  } 


  render() {
    const navigation = this.props.navigation;
    return (  
      <Container >
          <Header style={styles.header} androidStatusBarColor={'#ff0019'}>
            <Left>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Icon name="ios-arrow-back"  style={{color: "#fff", fontSize: 40}}/>
              </TouchableOpacity>
            </Left>                                 
            <Title style={{textAlign:'center',width:'80%'}}>Please Scan QR</Title>
            <Right>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Icon name="log-out"  style={{color: "#fff", fontSize: 25}} type={'Entypo'} />
              </TouchableOpacity>
            </Right> 
          </Header>
         
         
           <QRscanner 
            onRead={this.onRead}           
            flashMode={this.state.flashMode}  
            //reactivate={true}
            finderY={50}/>
                   
         
          <Footer style={styles.footer}>
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
          </Footer>
         
          
      </Container>
    
    )    
  }
 
  onRead = (res) => { 
 //alert(JSON.stringify(res))
    this.showAlert('Reality Code',res.data)
    
  }
  showAlert(title, body) {
    Alert.alert(
        title, body,
        [{
                text: 'OK',
                onPress: () => {
                  this.props.navigation.navigate('ScanResult',{content:body})
                }
            }
        ], {
            cancelable: false
        },
    );
}
}
