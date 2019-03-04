import React, { Component } from "react";
import { ImageBackground, View, NativeEventEmitter, NativeModules, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Spinner,
  Tab,
  Tabs,
  Radio,
  Item,
  Input,
  Picker,
  List,
  Thumbnail,
  Fab
} from "native-base";
import { Constants, Styles, Color } from "@common";
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      active:false,
      data: (this.props.data) ? this.props.data : [] ,
      dataUser:[
        // {
        //   id:1,
        //   name:'Alex',
        //   urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        // },
        // {
        //   id:2,
        //   name:'john doe',
        //   urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        // },
        // {
        //   id:3,
        //   name:'Don Juan',
        //   urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        // },
      ]
    };
  }

  componentWillReceiveProps({data}) {
    this.setState({...this.state,data},()=>{

    })      
  }

  pindahDetail(item){
    const navigation = this.props.navigation;
    navigation.navigate('DetailPost',{detail : item})
  }

  pindahEdit(item){
    const navigation = this.props.navigation;
    navigation.navigate('NewPost',{detail : item,userId : (this.props.userId) ? this.props.userId : 1  })
  }

  hapus(item){
    fetch('https://jsonplaceholder.typicode.com/posts/'+item.id, {
      method: 'DELETE'
    })
    alert('sukses deleted')
  }
  

  render() {
    const navigation = this.props.navigation;

    return (
      <Container >        
        
        <Content style={{backgroundColor:Color.backgroundColorLight}}> 
        <View style={{ padding: 20 }}>          
          {
            this.state.data.map((item,s) => {
              return(
               <TouchableOpacity onPress={() => this.pindahDetail(item)}  style={{flex:1,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>
                  <View style={{flexDirection:'row',alignItems:'center',...Styles.space}}>
                    <Thumbnail source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{...Styles.rightMedium}}/>
                    <Text style={{...Styles.Text.default}}>{item.name}</Text>
                  </View>
                  <View style={{...Styles.space}}>
                    <Text style={{...Styles.Text.defaultBold,...Styles.spaceSmall}} numberOfLines={1}>{item.title}</Text>
                    <Text style={{...Styles.Text.default}} numberOfLines={3}>{item.body}</Text>
                  </View>
                  <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity onPress={() => this.pindahEdit(item)} style={{flex:1,alignItems:'center', borderRightWidth:1,borderTopWidth:1,borderColor:Color.borderLogin,paddingTop:10,paddingBottom:10}}>
                      <Text style={{...Styles.Text.default}}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.hapus(item)} style={{flex:1,alignItems:'center',borderTopWidth:1,borderColor:Color.borderLogin,paddingTop:10,paddingBottom:10}}>
                      <Text style={{...Styles.Text.default}}>HAPUS</Text>
                    </TouchableOpacity>
                  </View>
               </TouchableOpacity>   
              )
            })
          }

         {/*comment*/}
           {/*<View style={{flex:1,height:150,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>
                                    <View style={{flexDirection:'row',alignItems:'center',...Styles.space}}>
                                      <Thumbnail source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{...Styles.rightMedium}}/>
                                      <Text style={{...Styles.Text.default}}>Sailin</Text>
                                    </View>
                                    <View>                
                                      <Text style={{...Styles.Text.default}}>Description</Text>
                                    </View>
                                 </View>    */}           
        </View>
        </Content>
        <Fab          
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => navigation.navigate('NewPost',{detail : this.props.userId})}>
          <Icon name="share" />          
        </Fab>
        {/*<View style={{...Styles.Bars.Chat.layout,margin:0,borderTopRightRadius:0,borderTopLeftRadius:0,}}>
                    <Input 
                      placeholder="Tulis Komen anda..." 
                      style={Styles.Bars.Chat.textinput} 
                      placeholderTextColor={Color.placeholderText} 
                    />
                    <TouchableOpacity>
                      <Icon name='send' style={Styles.Bars.Chat.icon} />
                    </TouchableOpacity>
                  </View> */}
      </Container>
    );
  }

}

export default connect()(Feed);
