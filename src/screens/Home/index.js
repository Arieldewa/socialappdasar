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
  List
} from "native-base";
import { Constants, Styles, Color } from "@common";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

import Article from "./article";
import Book from "./book";
import CustomTab from '../Feed/customTabBar';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      loading:false,
      dataUser:[
        {
          id:1,
          name:'Alex',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
        {
          id:2,
          name:'john doe',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
        {
          id:3,
          name:'Don Juan',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
      ]
    };
  }

  pindahFeed(item){
    const navigation = this.props.navigation;
    navigation.navigate('Feed',{ detail : item})
  }

  componentDidMount(){
    this.getUser()
  }

  getUser(){
    var el = this;
    var params = {}
    this.setState({loading : true})
    
    Helper.getResponse('users', params, function (response) {
      // console.log(response);
      if (response.length > 0) {

        var arr = [];
        response.map( (s, i) => {
          arr.push({
            id:s.id,
            name:s.name,
            urlImage:{uri : 'https://via.placeholder.com/600/92c952'},
            website: s.website,
            raw: s,
          });
        });

        el.setState({
          dataUser: arr
        });
      } else {

        var msg = Helper.returnMessage(response);

        Alert.alert(
          'Error',
          msg
        );
      }      
      el.setState({loading : false})

    }, 'GET');
    this.setState({loading : false})
  }

  renderUserList(){
    return(
      this.state.dataUser.map((item,i) => {
        if (i % 2 == 0) {
          return(
            <View style={{flexDirection:'row',justifyContent:'space-between',...Styles.space}}>
                <TouchableOpacity onPress={() => this.pindahFeed(item)} style={{overflow:'hidden',alignItems:'center'}}>
                  <Image source={{uri:'https://via.placeholder.com/600/92c952'}} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}/>    
                  <Text style={{...Styles.Text.default,}}>{this.state.dataUser[i].name}</Text>
                  <Text style={{...Styles.Text.smallGreyLight,}}>{(this.state.dataUser[i].raw) ? this.state.dataUser[i].raw.website : '-'}</Text>
                </TouchableOpacity>

                { (this.state.dataUser[(i+1)]) ?
                    <TouchableOpacity onPress={() => this.pindahFeed(this.state.dataUser[(i+1)])} style={{overflow:'hidden',alignItems:'center'}}>
                      <Image source={{uri:'https://via.placeholder.com/600/92c952'}} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}/>    
                      <Text style={{...Styles.Text.default,}}>{this.state.dataUser[(i+1)].name}</Text>
                      <Text style={{...Styles.Text.smallGreyLight,}}>{(this.state.dataUser[(i+1)].raw) ? this.state.dataUser[(i+1)].raw.website :'-'}</Text>
                    </TouchableOpacity> : null
                }
            </View>  
          )
          
        }
      })
    )
  }

  render() {
    const navigation = this.props.navigation;
    if (this.state.loading) {
      return (
        <Spinner />
      )
    }else{
      return (
        <Container >        
          <Toolbar                        
              title={'Home'}
          />
          {/*<Content style={{backgroundColor:Color.backgroundColor}}> 
          <View style={{ padding: 20 }}>          
                         {this.renderUserList()}     
                    </View>
          </Content>       */} 
            <ScrollableTabView renderTabBar={() => <CustomTab someProp={'here'} />}
              style={{ backgroundColor: Color.backgroundColor }}
            >
              <Article tabLabel="Article" navigation={navigation} />
              <Book tabLabel="Book" navigation={navigation} />
            </ScrollableTabView> 
        </Container>
      );

    }
  }

}

export default connect()(Home);
