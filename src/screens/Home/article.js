import React, { Component } from "react";
import { ImageBackground, View, NativeEventEmitter, NativeModules, TouchableOpacity, Image,Linking,Alert } from "react-native";
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

class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
      active:false,
      loading:true,
      page:0,
      cari:'',
      order:'',
      selected: 'newest',
      dataSort:[
        'newest',
        'oldest',
        'relevance',
      ],
      // data: (this.props.data) ? this.props.data : [] ,
      data:[
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

  componentDidMount(){
    this.getArticles()
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    },() => {
      this.getArticles()   
    });
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

  // componentWillReceiveProps({data}) {
  //   this.setState({...this.state,data},()=>{

  //   })      
  // }
  _onScroll = (e) => {
        //infinit scroll
        let scrollHeight = e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height;

        if(parseInt(scrollHeight) == parseInt(e.nativeEvent.contentSize.height)){
            // if(this.state.data.last_page != this.state.data.current_page){
                this.getArticles();
            // }
        }
    }

  getArticles(){
    var el = this;
    var cari = this.state.cari != '' ? this.state.cari : ''
    var selected = this.state.selected 
    var page = this.state.page > 0 ? 'page='+this.state.page+'&' : ''
    var params = {}
    this.setState({loading : true})    
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+cari+'&sort='+selected+'&api-key=ba1xEQXW7run3IEqCNk7r7jyzhnGmeiD')
      .then(response => response.json())
      .then(json => {
          console.log(json.response.meta)
        if (json.status == 'OK') {
        var arr = [];
        json.response.docs.map( (s, i) => {
          
            arr.push({
              id:i,
              name:s.source,
              title:s.headline.main,            
              body:s.snippet,            
              url:s.web_url,            
            });            

        });

        console.log("pn:"+el.state.page+"pr:"+json.response.meta.offset/10)
        // next page 
        // if (el.state.page > 0 & el.state.page != json.response.meta.offset/10 + 1 ) {
        //   // el.state.data.push(arr)
        //   var dataTemp = el.state.data.concat(arr)
        //   el.setState({          
        //     data: dataTemp,
        //     page:json.response.meta.offset > 0 ? (json.response.meta.offset/10) + 1 : 0,
        //   });          
        // }else{
        //   el.setState({
        //     data: arr,
        //     page:json.response.meta.offset > 0 ? (json.response.meta.offset/10) + 1 : 1,
        //   });          
        // }
        el.setState({
            data: arr,
            page:json.response.meta.offset > 0 ? (json.response.meta.offset/10) + 1 : 1,
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
    
    // el.setState({loading : false})
  }

  pindahDetail(item){
    const navigation = this.props.navigation;
    navigation.navigate('DetailPost',{detail : item})
  }

  pindahEdit(item){
    const navigation = this.props.navigation;
    navigation.navigate('NewPost',{detail : item,userId : (this.props.userId) ? this.props.userId : 1  })
  }

  // hapus(item){
  //   fetch('https://jsonplaceholder.typicode.com/posts/'+item.id, {
  //     method: 'DELETE'
  //   })
  //   alert('sukses deleted')
  // }
  

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
          
          <Content style={{backgroundColor:Color.backgroundColorLight}}            
            >
          <View style={{backgroundColor:Color.backgroundColor,padding:20,flexDirection:'row'}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              {
                this.state.dataSort.map((item,s) => {
                  return(
                    <Picker.Item label={item} value={item} />
                  );
                })
              }
              
            </Picker>
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
              onPress={() => this.getArticles()}>
              <Text>cari</Text>
            </Button>
   
          </View> 
          <View style={{ padding: 20 }}>          
          <View            
            style={{alignSelf:'center',...Styles.space}}
            >
            <Text style={{ ...Styles.Text.default }}>(jumlah data : {this.state.data.length})</Text>
          </View>
            {
              this.state.data.map((item,s) => {
                return(
                 <TouchableOpacity onPress={() => this.link(item.url)}  style={{flex:1,elevation:1,borderRadius:5,padding:15,backgroundColor:Color.backgroundColor,...Styles.space}}>
                    <View style={{flexDirection:'row',alignItems:'center',...Styles.space}}>
                      <Thumbnail source={{uri: 'https://via.placeholder.com/600/92c952'}} style={{...Styles.rightMedium}}/>
                      <Text style={{...Styles.Text.default}}>{item.name}</Text>
                    </View>
                    <View style={{...Styles.space}}>
                      <Text style={{...Styles.Text.defaultBold,...Styles.spaceSmall}} numberOfLines={1}>{item.title}</Text>
                      <Text style={{...Styles.Text.mediumGrey}} numberOfLines={3}>{item.body}</Text>
                    </View>
                    
                 </TouchableOpacity>   
                )
              })
            }            
        
          </View>
          </Content>
        
        </Container>
      );
    }

}
}
export default connect()(Article);
