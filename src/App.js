import React from "react";
import {StatusBar} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Feed from "./screens/Feed";
import NewPost from "./screens/Feed/newPost";
import DetailPost from "./screens/Feed/detailPost";
import DetailGalery from "./screens/Feed/detailGalery";
import DetailPhoto from "./screens/Feed/detailPhoto";
// import SignUp from "./screens/SignUp";
// import SideBar from "./screens/Sidebar";
// import Inbox from "./screens/Inbox/";
// import Mail from "./screens/Mail/";
// import Compose from "./screens/Compose/";
// import Icons from "./screens/Icons/";
// import ProgressBar from "./screens/Progressbar/";
// import Spinner from "./screens/Spinner/";
// import Contacts from "./screens/Contact/";
// import Calendar from "./screens/Calendar/";
// import Form from "./screens/Form/";
// import ModalNSP from "./screens/Modal/";
// import FooterTabNavigation from "./components/Footer/tabNavigation";


const App = StackNavigator(
  {
    Home: { screen: Home },    
    Feed: { screen: Feed },    
    NewPost: { screen: NewPost },    
    DetailPost: { screen: DetailPost },    
    DetailGalery: { screen: DetailGalery },    
    DetailPhoto: { screen: DetailPhoto },    
  },
  {
    index: 0,
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <StatusBar hidden={true} />
    <App />
  </Root>;
