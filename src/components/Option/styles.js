import {Dimensions} from 'react-native'
const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height
export default {
    header:{backgroundColor:'#ff0019',justifyContent:'center',alignItems:'center',height:60,width:'100%'},
    search:{width:'80%',height:35,backgroundColor:'#d41227',borderRadius:10,flexDirection:'row' ,alignItems:'center',paddingLeft:10,marginRight:-50},
    searchInput:{height:35,width:'90%',padding:0,paddingLeft:10,color:'white',fontSize:15},
    footer:{backgroundColor:'#121312',paddingLeft:20,paddingRight:20,height:45,bottom:0,position:'absolute',width:'100%',flexDirection:'row'},
    scanButton:{ width:70,height:70,backgroundColor:'#121312',borderRadius:35, marginTop:-35,
                justifyContent:'center',
                alignItems:'center',
                shadowColor: 'white',
                zIndex:100,
                shadowRadius: 10,
                shadowOpacity: 0.6,
                elevation: 8,
                shadowOffset: {width: 0,height: 4}},
    userAvatar:{width:70,height:70,borderRadius:35,marginTop:10},
    p10:{color:'black',fontSize:10},
    p14B:{color:'black',fontSize:14,fontWeight:'bold'},
    p16:{color:'black',fontSize:16,paddingLeft:10},
    HorizontalItems:{
      height:'100%',width:'30%',alignItems:'center'
    },
    
    item:{     
        width:65,
        height:50,
        margin:5,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
        
      },
      itemText:{
        color:'white',
        fontSize:10,
        marginTop:2
      },
     historyItem:{width:90,height:120,marginRight:20,marginTop:15,alignItems:'center',justifyContent:'center'},
     historyUserAvatar:{width:50,height:50,borderRadius:25,borderWidth:1,borderColor:'#0000',marginBottom:10},
     optionNav:{width:screenWidth-40,height:195,alignItems:'center',borderRadius:10},
     optionTopBar:{width:screenWidth-40,height:35,alignItems:'center',borderRadius:10,backgroundColor:'#e9efec',marginTop:-2,justifyContent:'center', flexDirection:'row'}
  };
  