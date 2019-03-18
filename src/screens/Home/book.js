import React, { Component } from "react";
import { ImageBackground, View, NativeEventEmitter, NativeModules, TouchableOpacity, Image, Linking } from "react-native";
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

class Book extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      active:false,
      cari:'',
      // data: (this.props.data) ? this.props.data : [] ,
      dataGalery:[
        {
          id:1,
          name:'Alex',
          title:'Alex',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
        {
          id:2,
          name:'john doe',
          title:'john doe',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
        {
          id:3,
          name:'Don Juan',
          title:'Don Juan',
          urlImage:{uri : 'https://via.placeholder.com/600/92c952'}
        },
      ]
    };
  }

  // componentWillReceiveProps({data}) {
  //   this.setState({...this.state,data},()=>{

  //   })      
  // }

  componentDidMount(){
    this.getBooks()
  }

  getBooks(){
    var el = this;
    var cari = 'election'
    var params = {}
    this.setState({loading : true})
    
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&list=e-book-fiction&api-key=ba1xEQXW7run3IEqCNk7r7jyzhnGmeiD')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        if (json.status == 'OK') {

        var arr = [];
        json.results.map( (s, i) => {
          
            arr.push({
              id:i,
              name:s.source,
              title:s.book_details[0].title,            
              body:s.book_details[0].description,                                
              url:s.amazon_product_url, 
              category:s.display_name,           
            });            

        });

        el.setState({
          dataGalery: arr
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
    
    // this.setState({loading : false})
  }

  link(url){
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
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

renderPhotoList(){
    return(
      this.state.dataGalery.map((item,i) => {
        if (i % 2 == 0) {
          return(
            <View style={{flexDirection:'row',justifyContent:'space-between',...Styles.space}}>
                <TouchableOpacity onPress={() => this.link(this.state.dataGalery[i].url)}  style={{overflow:'hidden',alignItems:'center'}}>
                  <ImageBackground source={{uri : 'https://via.placeholder.com/600/92c952'}} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}>
                    <View style={{flex:1,marginLeft:20,marginBottom:20,justifyContent:'flex-end'}}><Text style={{...Styles.Text.medium}}>{item.title}</Text></View>
                  </ImageBackground>                      

                </TouchableOpacity>

                { (this.state.dataGalery[(i+1)]) ?
                    <TouchableOpacity onPress={() => this.link(this.state.dataGalery[(i+1)].url)} style={{overflow:'hidden',alignItems:'center'}}>
                      <ImageBackground source={{uri : 'https://via.placeholder.com/600/92c952'}} style={{width:Constants.Window.width*0.45-10,height:Constants.Window.width*0.45-10,borderRadius:5,...Styles.spaceMedium}} resizeMode={'cover'}>
                        <View style={{flex:1,marginLeft:20,marginBottom:20,justifyContent:'flex-end'}}><Text numberOfLines={2} style={{...Styles.Text.medium}}>{this.state.dataGalery[(i+1)].title}</Text></View>
                      </ImageBackground>                          
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
        <Container > 
        <Content style={{backgroundColor:Color.backgroundColorLight}}>
        <Spinner />
        </Content>
        </Container>
      )
    }else{
      return (
        <Container >        
          
          <Content style={{backgroundColor:Color.backgroundColorLight}}> 
          <View style={{backgroundColor:Color.backgroundColor,padding:20,flexDirection:'row'}}>            
            <Item regular style={{flex:1,backgroundColor:Color.backgroundColor}}>
              <Input
                onChangeText={(cari) => this.setState({ cari })}
                value={this.state.cari}
                style={{color:Color.primaryText}}             
               placeholder='search' />              
            </Item>
            <Button 
              primary 
              style={{height:60}}
              onPress={() => alert("Mohon Maaf Fitur Belum Tersedia")}>
              <Text>cari</Text>
            </Button>
   
          </View>
          <View style={{ padding: 20 }}>          
           
              {this.renderPhotoList()}         
           

          </View>
          </Content>
        </Container>
      );
    }
  }

}

export default connect()(Book);
