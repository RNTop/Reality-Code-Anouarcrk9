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
  Platform, StatusBar,
  Linking
} from 'react-native'
import firebase from 'react-native-firebase'
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
      token:'',
      lifeData:[
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
        {icon:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44',image:'https://firebasestorage.googleapis.com/v0/b/reality-code.appspot.com/o/test%2FNoPath%20-%20Copy%20(2).png?alt=media&token=37a14f30-8e0d-4d88-baff-39b676fc2c44'},
       
      ]
    }
      

  } 

  componentDidMount(){    
    this.mytoken()
  }
  componentWillUnMount(){
   
  }
  mytoken(){
    firebase.messaging().getToken()
    .then(fcmToken => {
    if (fcmToken) {
      this.setState({token:fcmToken})
     
    } else {
      // user doesn't have a device token yet -- **my problem is here**
    } 
    })
  }
 RenderLifeData(lifeData){
  var LifeView = [];
  for (let i=0; i < 3; i++) {
    LifeView.push(
    <View style={styles.HorizontalItems}> 
    {
      lifeData.map((value, num) => {         
      
       if(num%3==i){
         
           return (
            <View key={num}
             style={styles.item}
            >
                <Image
                 source={{uri:value.image}}
                 style={{width:50,height:50,borderRadius:25,margin:3}}
                />
                <Image
                 source={{uri:value.icon}}
                 style={{width:12,height:12}}
                />
            </View>
           )
       }
      }           
      )
    }
    </View> 
    )
  }  
  return LifeView
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
            <View  style={styles.search}>
                <Icon
                    active
                    name={'search'}
                    style={{color: "#fff", fontSize: 25}}
                />
                <TextInput               
                style={styles.searchInput}
                placeholder={'Search'}
                placeholderTextColor={'white'}                
                />
            </View>
            <Right>
              <TouchableOpacity  onPress={() => navigation.goBack()}>              
                
                <Icon name="log-out"  style={{color: "#fff", fontSize: 25}} type={'Entypo'} />
               </TouchableOpacity>
            </Right> 
          </Header>
         
          <Body>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                source={this.state.userAvatar}
                style={styles.userAvatar}
                />
                <Text style={{color:'black'}}>Anton</Text>
                <Text style={{color:'black',fontWeight:'bold'}}>LRAMOUREUX</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.p10}>33 R-followers</Text>
                  <Image
                    source={IconURL.newFollow}
                    style={{width:25,height:25,marginLeft:10,marginRight:10}}
                    />
                  <Text style={styles.p10}>35 R-followers</Text>
                </View>
            </View >
            <Card style={{flex:0.9}}>
              <CardItem style={{width:screenWidth/1.25,flex:1,}}>
                 <Left>
                   <Text style={styles.p14B}>Social Accounts</Text>
                 </Left>
                 <Right>
                   <TouchableOpacity                    
                    >
                     <Image source={IconURL['add']} style={{width:25,height:25}}/>
                   </TouchableOpacity>
                 </Right>
              </CardItem>
              <CardItem style={{width:screenWidth/1.25,flex:4,backgroundColor:'#e9efec'}}>
              <ScrollView>
                <TouchableOpacity style={{flexDirection:'row',margin:2}}
                  onPress={()=>{this.SocialOPenApp('https://www.facebook.com/')}}
                >
                  <Image source={IconURL['Facebook']} style={{width:20,height:20}}/>
                  <Text style={{color:'black',paddingLeft:5}}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',margin:2} }
                 onPress={()=>{this.SocialOPenApp('https://twitter.com/')}}>
                <Image source={IconURL['Twitter']} style={{width:20,height:20}}/>
                <Text style={{color:'black',paddingLeft:5}}>Twitter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',margin:2}}
              onPress={()=>{this.SocialOPenApp('https://www.instagram.com/')}}>
                <Image source={IconURL['Instagram']} style={{width:20,height:20}}/>
                <Text style={{color:'black',paddingLeft:5}}>Instagram</Text>
              </TouchableOpacity>                
              </ScrollView>

              </CardItem>
            </Card>
            <Card style={{flex:1.5,width:screenWidth/1.25,padding:10}}>
            <ScrollView style={{backgroundColor:'#e9efec',width:'100%',height:'100%',borderRadius:5}}>
             <View style={{backgroundColor:'#e9efec',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:10}}>
              {this.RenderLifeData(this.state.lifeData)}
             </View>     
            </ScrollView>
              <TouchableOpacity
              style={{position:'absolute',right:15,bottom:15}}
              >
                <Image source={IconURL['add']} style={{width:25,height:25}}/>
              </TouchableOpacity>
            </Card>
          </Body>          
          <Footer style={{backgroundColor:'white',height:80}}>
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
  SocialOPenApp(key){
    Linking.openURL(key) 
  }
}
