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
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

class DetailPhoto extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
        loading:false,
        detailPhoto:{},        
    };
  }

  componentDidMount(){
    var el = this
    this.setState({detailPhoto : this.props.navigation.state.params.detail},() => {
      
    })
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
              title={'Detail Photo'}
          />
        <Content style={{backgroundColor:Color.backgroundColorLight}}> 
        <View style={{ padding: 20 }}>                    
          <Image source={this.state.detailPhoto.image} style={{width:Constants.Window.width-40,height:Constants.Window.height*0.5,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}/>                      
           <View style={{flex:1,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>              
              <View>
                <Text style={{...Styles.Text.defaultBold,...Styles.spaceSmall}} >{this.state.detailPhoto.title}</Text>                
              </View>
           </View>   
        </View>
        </Content>
      </Container>
    );

    }
  }

}

export default connect()(DetailPhoto);
