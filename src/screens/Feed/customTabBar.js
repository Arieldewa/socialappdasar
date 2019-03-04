import React, { Component } from "react";
import { ImageBackground, View, Modal, NativeEventEmitter, NativeModules, TouchableOpacity, Animated } from "react-native";
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
import { Images, Config, Constants, Styles, Color } from "@common";
import { Toolbar, Footer } from "@components";
import { Helper } from "@theme";

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import styles from "./styles";

class CustomTabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // visibility: true
    };
  }

  renderTabOption(name, page) {
  
  }

  renderTab(name, page, isTabActive, onPressHandler) {
    return <TouchableOpacity
      style={{ ...Styles.Tabs.Regular.item,justifyContent:'center' }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <Text style={(isTabActive) ? { ...Styles.Tabs.Regular.text, ...Styles.Tabs.Regular.textActive } : { ...Styles.Tabs.Regular.text }}>
        {name}
      </Text>
    </TouchableOpacity>;
  }

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    
    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0,  containerWidth / numberOfTabs],
    });

    return (
      <View style={{ ...Styles.Tabs.Regular.layout ,margin:0}}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          
        />
      </View>
    );
  }

}

export default connect()(CustomTabs);
