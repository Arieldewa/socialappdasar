import React, { Component } from "react";
import { ImageBackground, View, NativeEventEmitter, NativeModules, TouchableOpacity, Image,Alert } from "react-native";
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
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

import Post from './contentPost';
import Galery from './contentGalery';
import CustomTab from './customTabBar';

class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      loading:true,
      dataPost:[
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
      dataAlbum:[],
      detail:{},
    };
  }

  componentDidMount(){
    var el = this
    this.setState({detail : this.props.navigation.state.params.detail},() => {
      // alert(this.state.detail.id)
      el.getPost()
      el.getAlbum()
    })
  }

  getPost(){
    var el = this;
    var params = {}
    this.setState({loading : true})
    
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+el.state.detail.id)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {

        var arr = [];
        json.map( (s, i) => {
          if (s.userId == el.state.detail.id) {
            arr.push({
              id:s.id,
              name:el.state.detail.name,
              title:s.title,            
              body:s.body,            
            });            
          }
        });

        el.setState({
          dataPost: arr
        });
      } else {

        var msg = Helper.returnMessage(json);

        Alert.alert(
          'Info',
          'tidak Ada data Post'
        );
      }        
        el.setState({loading : false})
      })    
    
    this.setState({loading : false})
  }

  getAlbum(){
    var el = this;
    var params = {}
    this.setState({loading : true})
    
    //menggunakan endpoint mengambil post semua karena endpoint peruser bermasalah
    Helper.getResponse('albums', params, function (response) {
      // alert(JSON.stringify(response));
      if (response.length > 0) {

        var arr = [];
        response.map( (s, i) => {
          if (s.userId == el.state.detail.id) {
            arr.push({
              id:s.id,
              name:el.state.detail.name,
              title:s.title,            
              // body:s.body,            
            });            
          }
        });

        el.setState({
          dataAlbum: arr
        });
      } else {

        var msg = Helper.returnMessage(response);

        Alert.alert(
          'Info',
          'tidak Ada data album'
        );
      }      
      el.setState({loading : false})

    }, 'GET');
    this.setState({loading : false})
  }
  

  render() {
    const navigation = this.props.navigation;
    if (this.state.loading) {
      return(
        <Spinner />
      )
    }else{
      return (
        <Container >        
          <Toolbar                        
              backButton={true}
              onPressBack={() => navigation.goBack()}
              title={'Feed'}
          />
          <ScrollableTabView renderTabBar={() => <CustomTab someProp={'here'} />}
            style={{ backgroundColor: Color.backgroundColor }}
          >
            <Post tabLabel="Post" navigation={navigation} data={this.state.dataPost} userId={this.state.detail.id}/>
            <Galery tabLabel="Galery" navigation={navigation} data={this.state.dataAlbum} />
          </ScrollableTabView>                
        </Container>
      );
      
    }
  }

}

export default connect()(Feed);
