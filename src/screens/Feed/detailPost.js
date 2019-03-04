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
  Thumbnail,
  Fab,
  Textarea
} from "native-base";
import Modal from 'react-native-modalbox';
import { Constants, Styles, Color } from "@common";
import { Helper } from "@theme";
import { Toolbar } from "@components";
import styles from "./styles";

class DetailComent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
        loading:true,
        detailPost:{},
        dataComent:[],
        modalVisible:false,
        statusEdit:false,
    };
  }

  componentDidMount(){
    var el = this
    this.setState({
      detailPost : this.props.navigation.state.params.detail,      
    },() => {
      el.getComment()
    })
  }

  pindahEdit(item){
    // const navigation = this.props.navigation;
    this.setState({
      title : item.name,
      body : item.body,
      statusEdit:true,
    })
    this.refs.formComent.open()
  }

  tambahComment(){
    const navigation = this.props.navigation
    var el = this
    var url = 'https://jsonplaceholder.typicode.com/comments'
    var method = 'POST'

    if (this.state.statusEdit) {      
      url = 'https://jsonplaceholder.typicode.com/comments/'+el.state.detailPost.id
      method = 'PUT'
    }

    // POST adds a random id to the object sent


    fetch(url, {
        method: method,
        body: JSON.stringify({
          postId: el.state.detailPost.id,
          name: 'alezander@gmail.com',
          email: el.state.email,
          body: el.state.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        alert(
          "Sukses, comment Body: "+json.body+' dengan Comment ID :'+json.id          
        )
        this.setState({
          statusEdit:false,
          title : '',
          body : '',
        })
        // navigation.goBack()
        this.refs.formComent.close()
      })
  }

  getComment(){
    var el = this;
    var params = {}
    this.setState({loading : true})
    
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+el.state.detailPost.id)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          var arr = [];
          json.map( (s, i) => {
            
              arr.push({
                id:s.id,
                name:s.name,
                email:s.email,            
                body:s.body,            
              });                        
          });

          el.setState({
            dataComent: arr
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

  hapus(item){
    fetch('https://jsonplaceholder.typicode.com/comments/'+item.id, {
      method: 'DELETE'
    })
    alert('sukses deleted')
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
              title={'Post Detail'}
          />
        <Content style={{backgroundColor:Color.backgroundColorLight}}> 
        <View style={{ padding: 20 }}>                    
           <View style={{flex:1,height:200,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>
              <View style={{flexDirection:'row',alignItems:'center',...Styles.space}}>
                <Thumbnail source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{...Styles.rightMedium}}/>
                <Text style={{...Styles.Text.default}}>{this.state.detailPost.name}</Text>
              </View>
              <View style={{...Styles.space}}>
                <Text style={{...Styles.Text.defaultBold,...Styles.spaceSmall}} numberOfLines={1}>{this.state.detailPost.title}</Text>
                <Text style={{...Styles.Text.default}} numberOfLines={3}>{this.state.detailPost.body}</Text>
              </View>
           </View>   
          <View style={{alignItems:'center',...Styles.space}}>
            <Text style={{flex:1,...Styles.Text.default}}>Comment</Text>            
          </View>
         {/*comment*/}
         {
          this.state.dataComent.map((item,i) => {
            return(
             <View style={{flex:1,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>
                <View style={{flexDirection:'row',alignItems:'center',...Styles.space}}>
                  <Thumbnail source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{...Styles.rightMedium}}/>
                  <Text style={{...Styles.Text.default}}>{item.email}</Text>
                </View>
                <View style={{...Styles.space}}>                
                  <Text style={{...Styles.Text.default}}>{item.body}</Text>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                  <TouchableOpacity onPress={() => this.pindahEdit(item)} style={{flex:1,alignItems:'center', borderRightWidth:1,borderTopWidth:1,borderColor:Color.borderLogin,paddingTop:10,paddingBottom:10}}>
                    <Text style={{...Styles.Text.default}}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.hapus(item)} style={{flex:1,alignItems:'center',borderTopWidth:1,borderColor:Color.borderLogin,paddingTop:10,paddingBottom:10}}>
                    <Text style={{...Styles.Text.default}}>HAPUS</Text>
                  </TouchableOpacity>
                </View>
             </View>                  
            )
          })
         }
        </View>
        </Content>
        <Fab          
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.refs.formComent.open()}>
          <Icon name="share" />          
        </Fab>
        <Modal
            style={{ ...styles.modalContainer, height: null }}
            backdrop={true}
            ref={'formComent'}
            swipeToClose={false}
        >

            <View style={{ ...styles.modalContent, }}>
                <View style={{ padding: 20 }}>          
                  <Text style={{ ...Styles.Text.defaultBold }}>Comment Name</Text>
                  <Item style={{ ...Styles.Form.field }}>
                    <Input 
                      placeholder="Masukan Title Comment" 
                      style={{...Styles.Form.Textinput.normal,color:'black'}} 
                      placeholderTextColor={Color.placeholderText}
                      onChangeText={(title) => this.setState({ title })}
                      value={this.state.title} />
                  </Item>
                  <Text style={Styles.Text.defaultBold}>Body Comment</Text>
                  <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Masukan Body Comment"
                    style={{ ...Styles.Form.textArea, ...Styles.Text.default, ...Styles.spaceLarge }}
                    onChangeText={(body) => this.setState({ body })}
                    value={this.state.body}
                  />
                <Button
                  block
                  style={{ ...Styles.Button.largeSquareOut, ...Styles.space }}
                  onPress={() => this.tambahComment()}
                >
                  <Text style={Styles.Text.buttonOut}>Simpan</Text>
                </Button>
                </View>
            </View>            
        </Modal>
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

}

export default connect()(DetailComent);
