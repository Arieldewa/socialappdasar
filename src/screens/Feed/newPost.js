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
  Textarea
} from "native-base";
import { Constants, Styles, Color } from "@common";
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

class NewPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      title:'',
      body:'',
      userId:'',
      detailPost:{},
    };
  }

  componentDidMount(){
    this.setState({
      detailPost : this.props.navigation.state.params.detail,
      title : this.props.navigation.state.params.detail.title,
      body : this.props.navigation.state.params.detail.body,
      userId : this.props.navigation.state.params.userId
    },() => {
      // el.getComment()
    })
  }

  
  pindahDetail(item){
    const navigation = this.props.navigation;
    navigation.navigate('DetailGalery',{detail : item})
  }

  tambahPost(){
    const navigation = this.props.navigation
    var el = this
    var url = 'https://jsonplaceholder.typicode.com/posts'
    var method = 'POST'

    if (this.state.detailPost) {      
      url = 'https://jsonplaceholder.typicode.com/posts/'+el.state.detailPost.id
      method = 'PUT'
    }

    // POST adds a random id to the object sent


    fetch(url, {
        method: method,
        body: JSON.stringify({
          title: el.state.title,
          body: el.state.body,
          userId: el.state.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        alert(
          "Sukses, Post Title: "+json.title+'dengan POST ID :'+json.id          
        )
        navigation.goBack()
      })
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <Container >        
        <Toolbar                        
            backButton={true}
            onPressBack={() => navigation.goBack()}
            title={'Buat Feed'}
        />
        <Content style={{backgroundColor:Color.backgroundColor}}> 
          <View style={{ padding: 20 }}>          
            <Text style={{ ...Styles.Text.defaultBold }}>Title Post</Text>
            <Item style={{ ...Styles.Form.field }}>
              <Input 
                placeholder="Masukan Title" 
                style={{...Styles.Form.Textinput.normal,color:'black'}} 
                placeholderTextColor={Color.placeholderText}
                onChangeText={(title) => this.setState({ title })}
                value={this.state.title} />
            </Item>
            <Text style={Styles.Text.defaultBold}>Body Post</Text>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Masukan Body"
              style={{ ...Styles.Form.textArea, ...Styles.Text.default, ...Styles.spaceLarge }}
              onChangeText={(body) => this.setState({ body })}
              value={this.state.body}
            />
          <Button
            block
            style={{ ...Styles.Button.largeSquareOut, ...Styles.space }}
            onPress={() => this.tambahPost()}
          >
            <Text style={Styles.Text.buttonOut}>Simpan</Text>
          </Button>
          </View>
        </Content>
      </Container>
    );
  }

}

export default connect()(NewPost);
