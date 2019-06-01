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
//import AntDesign from 'react-native-vector-icons/AntDesign'

import {IconURL} from '../../constant'
// import Octicons from 'react-native-vector-icons/Octicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// import Feather from 'react-native-vector-icons/Feather';
// import Zocial from 'react-native-vector-icons/Zocial';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ItemIconSize=25

// const WebIcon=<Icon name="web"   size={ItemIconSize} type={'MaterialCommunityIcons'}/>

// const IcloudIcon=<Icon name="web"   size={ItemIconSize} type={'MaterialCommunityIcons'}/>
// //const IcloudIcon=<AntDesign name="clouddownload" size={ItemIconSize}  />

// const OutlookIcon=<Icon name="outlook"   size={ItemIconSize} type={'MaterialCommunityIcons'}/>
// const GmailIcon=<Icon name="gmail"   size={ItemIconSize} type={'MaterialCommunityIcons'}/>
// const ViberIcon=<Image source={require('../../assets/images/viber.png')} style={{width:25,height:25}} />
// const RedditIcon=<Icon name="reddit"   size={ItemIconSize} type={'MaterialCommunityIcons'}/>
// const TumblrIcon=<Icon name="tumblr-square"   size={ItemIconSize} type={'FontAwesome'}/>
// const YoutubeIcon=<Icon name="youtube-play"   size={ItemIconSize} type={'FontAwesome'}/>
// const FbIcon=<Icon name="facebook-square"   size={ItemIconSize} type={'FontAwesome'}/>
// const SnapchatIcon=<Icon name="snapchat-ghost"   size={ItemIconSize} type={'FontAwesome'}/>
// const PinterestIcon=<Icon name="pinterest"   size={ItemIconSize} type={'FontAwesome'}/>
// const TwitterIcon=<Icon name="twitter"   size={ItemIconSize} type={'FontAwesome'}/>
// const InstagramIcon=<Icon name="instagram"   size={ItemIconSize} type={'FontAwesome'}/>
// const LinkedinIcon=<Icon name="linkedin-square"   size={ItemIconSize} type={'FontAwesome'}/>
// const WhatsappIcon=<Icon name="logo-whatsapp"   size={ItemIconSize} type={'Ionicons'}/>
// const ContactIcon=<Icon name="md-contacts"   size={ItemIconSize} type={'Ionicons'}/>

const SwithOnIcon=<Icon name="toggle-switch" size={40} color={"#0f8e00"} type={'MaterialCommunityIcons'}/>
const SwithOffIcon=<Icon name="toggle-switch-off" size={40} color={"#0f8e00"} type={'MaterialCommunityIcons'}/>



const data1=[
  {id:0,name:'Weblink', type:'MaterialCommunityIcons' ,icon:'web'},
  {id:1,name:'ICloud', type:'AntDesign' ,icon:'clouddownload'},
  {id:2,name:'Outlook', type:'Entypo' ,icon:'email'},
  {id:3,name:'Gmail', type:'MaterialCommunityIcons' ,icon:'gmail'}
 ];
 const data2=[      
  {id:4,name:'Viber', type:'FontAwesome5' ,icon:'viber'},
  {id:5,name:'Reddit', type:'MaterialCommunityIcons' ,icon:'reddit'},
  {id:6,name:'Tumblr', type:'FontAwesome' ,icon:'tumblr-square'},
  {id:7,name:'Youtube', type:'FontAwesome' ,icon:'youtube-play'}
 ];
const data3=[
  {id:8,name:'Facebook', type:'FontAwesome' ,icon:'facebook-square'},
  {id:9,name:'Snapchat', type:'FontAwesome' ,icon:'snapchat-ghost'},
  {id:10,name:'Pinterest', type:'FontAwesome' ,icon:'pinterest'},
  {id:11,name:'Whatsapp', type:'Ionicons' ,icon:'logo-whatsapp'}      
];
const data4=[
  {id:12,name:'Twitter', type:'FontAwesome' ,icon:'twitter'},
  {id:13,name:'Instagram', type:'FontAwesome' ,icon:'instagram'},
  {id:14,name:'Linkedin', type:'FontAwesome' ,icon:'linkedin-square'},
  {id:15,name:'Contact', type:'Ionicons' ,icon:'md-contacts'}      
];
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
      text: '',
      actionItem:0,
      actionName:'Weblink', 
      activeBtn:[true,false], 
      inputNumber:0,
      historyData:[
        {key:'',avatar:'', firstName:'Anna',lastName:'LAMOUREUX'},
        {key:'',avatar:'', firstName:'Billa',lastName:'RORAMWA'},
        {key:'',avatar:'', firstName:'Crelsby',lastName:'CFENAWN'},
      ],
      notificationAction:true,
      autoOpenWeblink:false,
    }
      

  } 
  _renderItem = (data, i) => (
    <TouchableOpacity style={[{backgroundColor:data.id==this.state.actionItem ? '#419864' : '#333333'}, styles.item]} key={i}
      onPress={() => { this.changeActionItem(data.id,data.name) }}
    >
     {data.icon}
     <Text style={styles.itemText}>{data.name}</Text>
    </TouchableOpacity>
  );
changeActionItem(id,name){

  this.setState({actionItem:id,actionName:name})
  //alert(JSON.stringify(this.state))
  this.render()
}
GridView(Data){
  return <View style={{flexDirection:'row',height:70, }}>
         {
           Data.map((data, i)=>{
            return <TouchableOpacity style={[{backgroundColor:data.id==this.state.actionItem ? '#419864' : '#333333'}, styles.item]} key={i}
                    onPress={() => { this.changeActionItem(data.id,data.name) }}
                  >
                  <Icon name={data.icon}   size={ItemIconSize} type={data.type} style={{color:'white'}}/>
                  <Text style={styles.itemText}>{data.name}</Text>
                  </TouchableOpacity>
           })
         }
         </View>
}
handleScroll = (event)=> {
  if(event.nativeEvent.contentOffset.x>299){    
    this.setState({activeBtn:[false,true]})
  }else{
    this.setState({activeBtn:[true,false]})
  }

};
  _renderPlaceholder = i => <View style={styles.item} key={i} />;
  GridCreatorList(){
    const {activeBtn}=this.state
    return <View style={{width:300,height:150,}}>
            <ScrollView 
            horizontal={true}
            pagingEnabled={true}
            onScroll={this.handleScroll}
            style={{height:130,}}>         
              <View style={{height:130}}>
                  <View style={{height:65,}}>
                  {this.GridView(data1)}          
                  </View>
                  <View style={{height:65,}}>
                  {this.GridView(data2)}           
                  </View>
              </View>
              <View style={{height:130}}>
                <View style={{height:65,}}>
                    {this.GridView(data3)}          
                    </View>
                    <View style={{height:65,}}>
                    {this.GridView(data4)}           
                    </View>                      
                </View>          
            </ScrollView>
            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
              <View style={{width:10,height:10,borderRadius:5,backgroundColor:activeBtn[0]==true? '#419864' : '#333333',margin:5}}></View>
              <View style={{width:10,height:10,borderRadius:5,backgroundColor:activeBtn[1]==true? '#419864' : '#333333',margin:5}}></View>
            </View>
          </View>
  }
  GridHistoryList(){
    
    return <View style={{width:320,height:150,}}>
            <ScrollView 
            horizontal={true}
            pagingEnabled={true}          
            style={{height:130,}}>         
              <View style={{height:130,flexDirection:'row'}}>
                {
                  this.state.historyData.map((value,index)=>{
                    return <Card style={styles.historyItem} key={index}>
                              <Image source={this.state.userAvatar} style={styles.historyUserAvatar}/>
                              <Text style={styles.p10}>{value.firstName}</Text>
                              <Text style={styles.p10}>{value.lastName}</Text>
                           </Card>
                  })
                }                
              </View>                     
            </ScrollView>            
          </View>
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
         
          <Body style={{padding:20,backgroundColor:'#f8fefb',paddingBottom:0}}>
            <ScrollView style={{width:'100%',height:'100%',}}>
              <Card style={styles.optionNav}>
                <Card style={styles.optionTopBar}>               
                  
                  <Icon name="ios-create" size={25} style={{color: "black"}} type={'Ionicons'}/>
                  <Text style={styles.p16}>Creator</Text>
                </Card>
                {this.GridCreatorList()}
              </Card>
              <Card style={styles.optionNav}>
                <Card style={styles.optionTopBar}>                 
                  <Icon name="history" size={25} style={{color: "black"}} type={'FontAwesome'}/>
                  <Text style={styles.p16}>History</Text>
                </Card>
                {this.GridHistoryList()}
              </Card>
              <Card style={styles.optionNav}>
                <Card style={styles.optionTopBar}>                  
                  <Icon name="settings" size={25} style={{color: "black"}} type={'Octicons'}/>
                  <Text style={styles.p16}>Settle</Text>
                </Card>
               {this.SettleView()}
              </Card>
            </ScrollView>
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
  SettleView(){
    return  <View style={{width:330,height:150,justifyContent:'center'}}>
              <View style={{width:330,height:60,justifyContent:'center',flexDirection:'row'}}>
              <View style={{width:250,height:60,}}>
                <Text style={[styles.p10,{fontWeight:'bold'}]}>Notification bar</Text>
                <Text style={styles.p10}>Shortcut to use Scanner in the notification bar</Text>
                <Text style={[styles.p10,{color:'red'}]}>Recommend open</Text>
              </View>
              <TouchableOpacity
                onPress={()=>{this.ActionToggle('notification')}}
              >
                {
                 (()=>{
                   if(this.state.notificationAction){
                     return SwithOnIcon
                   }else{
                     return SwithOffIcon
                   }
                 })()
                }
              </TouchableOpacity>
              </View> 
              <View style={{width:330,height:60,justifyContent:'center',flexDirection:'row'}}>
                <View style={{width:250,height:60,}}>                 
                    <Text style={[styles.p10,{fontWeight:'bold'}]}>Ouvrir les pages Web automatiquement</Text>
                    <Text style={styles.p10}>When Scannaing weblnk QR code, it will</Text>
                    <Text style={styles.p10}>automatically open in web browser</Text>
                    <Text style={[styles.p10,{color:'red'}]}>Recommend open</Text>
                </View>
                <TouchableOpacity  onPress={()=>{this.ActionToggle('autoOpen')}}>
                {
                 (()=>{
                   if(this.state.autoOpenWeblink){
                     return SwithOnIcon
                   }else{
                     return SwithOffIcon
                   }
                 })()
                }
              </TouchableOpacity>                  
              </View>
              
            </View>
  }
  ActionToggle(key){
    const {notificationAction, autoOpenWeblink}=this.state
    if(key=='notification'){
      notificationAction===true?this.setState({notificationAction:false}):this.setState({notificationAction:true})
    }else{
      autoOpenWeblink===true?this.setState({autoOpenWeblink:false}):this.setState({autoOpenWeblink:true})
    }
  }
}
