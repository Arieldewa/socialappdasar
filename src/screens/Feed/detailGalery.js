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

class DetailGalery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
        loading:true,
        detailGalery:{},
        dataGalery:[],
      
    };
  }

  componentDidMount(){
    var el = this
    this.setState({detailGalery : this.props.navigation.state.params.detail},() => {
        el.getPhoto()
    })
  }
  
  getPhoto(){
    var el = this;
    var params = {}
    this.setState({loading : true})
    
    fetch('https://jsonplaceholder.typicode.com/photos?albumId='+el.state.detailGalery.id)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          var arr = [];
          json.map( (s, i) => {
            
              arr.push({
                id:s.id,
                title:s.title,
                image:{uri : s.url},            
                raw:s,            
              });                        
          });

          el.setState({
            dataGalery: arr
          });
        } else {

          var msg = Helper.returnMessage(response);

          Alert.alert(
            'Info',
            'tidak Ada data comment'
          );
        }      
        el.setState({loading : false})
      })    
    this.setState({loading : false})
  }

  pindahDetail(item){
    const navigation = this.props.navigation;
    navigation.navigate('DetailPhoto',{detail : item})
  }

  renderPhotoList(){
    return(
      this.state.dataGalery.map((item,i) => {
        if (i % 2 == 0) {
          return(
            <View style={{flexDirection:'row',justifyContent:'space-between',...Styles.space}}>
                <TouchableOpacity onPress={() => this.pindahDetail(item)} style={{overflow:'hidden',alignItems:'center'}}>
                  <Image source={this.state.dataGalery[i].image} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}/>                      
                </TouchableOpacity>

                { (this.state.dataGalery[(i+1)]) ?
                    <TouchableOpacity onPress={() => this.pindahDetail(this.state.dataGalery[(i+1)])} style={{overflow:'hidden',alignItems:'center'}}>
                      <Image source={this.state.dataGalery[(i+1)].image} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}/>                          
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
      return(
        <Spinner />
      )
    }else{
      return (
        <Container >        
          <Toolbar                        
                backButton={true}
                onPressBack={() => navigation.goBack()}
                title={'Galery'}
            />
          <Content style={{backgroundColor:Color.backgroundColorLight}}> 
          <View style={{ padding: 20 }}>                    
            {this.renderPhotoList()}         
          </View>
          </Content>
        </Container>
      );
      
    }
  }

}

export default connect()(DetailGalery);
