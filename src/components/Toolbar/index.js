import React, { Component, } from "react";
import { ImageBackground, View, TouchableOpacity, Image, Dimensions, StatusBar, Platform, } from "react-native";
import { connect } from "react-redux";
import {
  Text,
  Icon,
  ListItem,
  Content,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge,
  Header,
  Title,
  Button,
  Input,
  Item
} from "native-base";
import { NavigationActions } from "react-navigation";
import { Styles, Color } from "@common";
import styles from "./styles";
const deviceWidth = Dimensions.get('window').width;

import backIco from "../../../assets/icons8-back-filled-50.png"
const Toolbar = (props) => {


  return (


    <Header style={{ ...Styles.Container.header, ...Styles.headerHeight,elevation:5 }}>

      <View  style={{ ...Styles.Container.headerImageBg, flexDirection: 'row', alignItems: 'center', backgroundColor:'#1a5ec9'}} >

        {
          props.backButton &&
          <TouchableOpacity style={{ ...Styles.rightMedium }} onPress={props.onPressBack}>
            <Image source={backIco} style={{ color: Color.primaryText, width: 20 , height:20 }} resizeMode={'contain'} />
          </TouchableOpacity>
        }
        {
          props.profile && <Image source={props.profile} resizeMode={'cover'} style={{ ...Styles.Image.iconHeader, borderRadius: 5 }} />
        }

        {
          !props.search &&
          <View style={{ marginLeft: 10, flex: 1 }}>
            {
              props.title &&
              <Text numberOfLines={1} style={{ ...Styles.Text.jumboBold,color:'white', textAlign:'center', }}>{props.title}</Text>
            }
            {
              props.subTitle && <Text numberOfLines={1} style={{ ...Styles.Text.mediumGrey, marginTop: -5, }}>{props.subTitle}</Text>
            }
            {
              props.subTitleDark && <Text numberOfLines={1} style={{ ...Styles.Text.medium, marginTop: 5, }}>{props.subTitleDark}</Text>
            }
          </View>
        }

      </View>
    </Header>

  );

}
export default Toolbar;
