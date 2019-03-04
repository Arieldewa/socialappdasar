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
  Thumbnail
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
      ],
      data : (this.props.data) ? this.props.data : [],
    };
  }

  componentWillReceiveProps({data}) {
    this.setState({...this.state,data},()=>{

    })      
  }
  
  pindahDetail(item){
    const navigation = this.props.navigation;
    navigation.navigate('DetailGalery',{detail : item})
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
               <TouchableOpacity onPress={() => this.pindahDetail(item)} style={{...Styles.space}}>
                  <ImageBackground source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{width:Constants.Window.width-40,height:200,overflow:'hidden',borderRadius:5}}>
                    <View style={{flex:1,marginLeft:20,marginBottom:20,justifyContent:'flex-end'}}>
                      <Text style={{...Styles.Text.default, marginRight:20}} numberOfLines={1}>{item.title}</Text>                  
                    </View>
                  </ImageBackground>
               </TouchableOpacity>
               );
            })
          }
        </View>
        </Content>
      </Container>
    );
  }

}

export default connect()(Feed);
