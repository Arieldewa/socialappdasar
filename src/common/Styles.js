import { Dimensions, Platform } from 'react-native';
import Constants from './Constants';
import Color from './Color';
// import Config from './Config';

const { height, width, heightWindow } = Dimensions.get('window');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

let Styles = {

  positionCenter: {
    alignSelf: 'center',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceMin:{
    marginBottom: -5
  },
  spaceSmall: {
    marginBottom: 5
  },
  spaceMedium: {
    marginBottom: 10
  },
  space: {
    marginBottom: 20
  },
  space15: {
    marginBottom: 15
  },
  space30: {
    marginBottom: 30
  },
  spaceLarge: {
    marginBottom: 40
  },
  rightSmall: {
    marginRight: 5
  },
  rightMedium: {
    marginRight: 10
  },
  right: {
    marginRight: 20
  },
  right15: {
    marginRight: 15
  },
  rightLarge: {
    marginRight: 40
  },
  marginSide: {
    marginLeft: 20,
    marginRight: 20
  },
  marginLogin: {
    marginLeft: 20,
    marginRight: 20
  },

  paddingSideSmall: {
    padding: 5
  },
  paddingSideMedium: {
    padding: 10
  },
  paddingSide: {
    padding: 20
  },
  tabNAvHeight: {
    height: 50
  },
  headerHeight: {
    height: 60
  },
  toolbarHeight: {
    height: 55
  },
  footerHeight: {
    height: 60
  },
  underlineView: {
    borderColor: Color.primaryBorder,
    borderBottomWidth: 1,
  },
  underlineViewWhite: {
    borderColor: Color.white,
    borderBottomWidth: 0.5,
  },

  borderRadiusSmall:{
    borderRadius: 5
  },
  borderRadius:{
    borderRadius: 10
  },
};

Styles.Placeholder = {
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    alignSelf: "center",
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 30
  },
  text: {
    alignSelf: "center",
    color: "#000"
  }
};

Styles.Form = {
  textArea: { 
    borderColor: Color.primaryBorder,
    borderRadius: 10,
    alignSelf: 'stretch'
  },
  field: {
    marginBottom: 15,
    // flex: 1,
    padding: 0
  },
  icon: {
    color: "#c0c0c0"
  },

  HForm: {
    layout: {
      flexDirection: "row",
      width: width
    },
    item: {
      marginRight: 20
    }
  },
  Label: {
    text: {
      fontFamily: Constants.fontFamilyBold,
      color: Color.formLabel,
      marginBottom: 10
    }
  },
  Radio: {
    col: {
      flexDirection: "row",
      marginBottom: 10
    },
    label: {
      fontFamily: Constants.fontFamilyBold,
      fontSize: 16,
      color: Color.primaryText
    },
    input: {
      marginRight: 10
    }
  },
  Textinput: {
    normal: {
      borderBottomWidth: 1,
      borderBottomColor: "#c0c0c0"
    },
    colorText:{
      color:Color.primaryText
    },
    box: {
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: "#c0c0c0",
      borderRadius: 5,
      paddingLeft: 20,
      paddingRight: 20
    },
    boxInput: {
      borderBottomWidth: 0
    }
  }
};

Styles.Dropdown = {
  icon: {
    position: "absolute", top: 10, left: 30, color: "#000", fontSize: 28
  },
  withIcon: {
    position: "relative",
    paddingLeft: 60
  },
  normal: {
    borderBottomWidth: 1,
    borderBottomColor: "#c0c0c0"
  },
  box: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c0c0c0",
    borderRadius: 5,
    paddingLeft: 20,
  },
  shadow: {
    borderWidth: 0,
    borderColor: "#c0c0c0",
    borderRadius: 5,
    paddingLeft: 20,

    shadowColor: '#666666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  }
};

Styles.Rating = {
  layout: {
    width: 10
  },
  largeIcon: {
    width: 25, height: 25, marginRight: 5
  },
  smallIcon: {
    width: 15, height: 15, marginRight: 5
  }
};

Styles.Bars = {
  // TODO
};

Styles.Tabs = {
  Regular: {
    layout: {
      flexDirection: "row",
      elevation: 3,
      margin: 5,
      backgroundColor: "#fff",

      paddingVertical: 10
    },
    text: {
      textAlign: "center",
      color: Color.darkColor,
      paddingBottom: 20,
    },
    textActive: {
      color: Color.primaryColor,
      borderBottomWidth: 1,
      borderBottomColor: Color.primaryColor
    },
    item: {
      flex: 1,
      padding: 10,
      marginBottom: -20
    }
  },
  Pills: {
    layout: {
      flexDirection: "row",
      backgroundColor: "#fff",
    },
    text: {
      textAlign: "center",
      color: Color.lightColor,
    },
    textActive: {
      color: "#fff",
    },
    item: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: Color.lightColor,
      margin: 5
    },
    itemActive: {
      borderColor: Color.primaryColor,
      backgroundColor: Color.primaryColor,
    }
  },
};
Styles.OTP = {
  otpContainer: {
    borderBottomWidth: 1,
    borderColor: Color.primaryBorder,
    padding:10
    
  },
  otpDots: {
    height: 15,
    width: 15,
    borderRadius: 15,

  },
}

Styles.Status = {
  layout: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
    marginBottom: 10
  },
  warning: {
    backgroundColor: "#ff7b00"
  },
  error: {
    backgroundColor: "#f23118"
  },
  info: {
    backgroundColor: "#157ca2"
  },
  infoAlt: {
    backgroundColor: "#33c8ff"
  },
  infoAlt2: {
    backgroundColor: "#4057cc"
  },
  infoAlt3: {
    backgroundColor: "#081051"
  },
  success: {
    backgroundColor: "#265301"
  }
};

Styles.Popup = {
  // TODO
  layout: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: (width-40),
    height: null
  },
  wrapper: {
    padding: 30
  },
  title: {
    fontSize: 22,
    color: Color.primaryText,
    fontFamily: Constants.fontFamilyBold,
    textAlign: "center",
    marginBottom: 40
  },
  action: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Color.primaryColor
  },
  actionBtn: {
    flex: 1,
    padding: 20,
    marginTop: -1
  },
  actionPrimaryBtn: {
    backgroundColor: Color.primaryColor
  },
  actionTxt: {
    color: Color.primaryColor,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: Constants.fontFamilyBold,
  },
  actionPrimaryTxt: {
    color: "#fff",
  },
  actionRoundLeft: {
    borderBottomLeftRadius: 10
  },
  actionRoundRight: {
    borderBottomRightRadius: 10
  },
};

Styles.Box = {
  layout: {
    padding: 15,
    elevation: 3,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  multiColsLayout: {
    flexDirection: "row"
  },
  multiColsItem: {
    flex: 1,
    marginRight: 20
  },
  multiColsItemLast: {
    marginRight: 0
  }
};

Styles.Bars = {
  Search: {
    layout: {
      flexDirection: "row",
      backgroundColor: "#ebebeb",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5
    },
    icon: {
      color: Color.searchPlaceholderText,
      marginRight: 10,
      marginTop: 8
    },
    textinput: {
      color: Color.searchPlaceholderText
    }
  },
  Chat: {
    layout: {
      flexDirection: "row",
      backgroundColor: "#fff",
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 5,
      elevation: 3,
      margin: 5
    },
    borderChat:{
      borderColor: Color.primaryBorder,
      borderWidth: 1,
    },
    icon: {
      color: Color.primaryColor,
      marginLeft: 20,
      marginTop: 8
    },
    textinput: {
      color: Color.placeholderText,
      borderColor: Color.placeholderText,
      borderWidth: 1,
      borderRadius: 5
    }
  }
};

Styles.Button = {

  smallSquare: {
    backgroundColor: Color.primaryColor,
    elevation: 0,
    borderRadius: 5,
    height: 35,
  },
  smallSquareOut: {
    backgroundColor: Color.white,
    elevation: 0,
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
    borderColor: Color.primaryColor
  },
  largeSquare: {
    backgroundColor: Color.primaryColor,
    height: 45,
    borderRadius: 10,
  },
  largeSquareFb: {
    backgroundColor: Color.blueFb,
    height: 45,
    borderRadius: 10,
  },
  largeSquareGoogle: {
    backgroundColor: Color.redGoogle,
    height: 45,
    borderRadius: 10,
  },
  largeSquareOut: {
    backgroundColor: Color.backgroundColor,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    height: 45,
    borderRadius: 10,
  },
  largeSquareOutOrange: {
    backgroundColor: Color.backgroundColor,
    borderWidth: 1,
    borderColor: Color.orange,
    height: 45,
    borderRadius: 10,
  },
  favourite: {
    backgroundColor: Color.primaryColor,
    height: 30,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  favouriteOut: {
    backgroundColor: Color.backgroundColor,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    height: 30,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  modalSingle: {
    backgroundColor: Color.primaryColor,
    height: 45,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 0
  },
  modalLeft: {
    backgroundColor: Color.primaryColor,
    height: 45,
    borderBottomLeftRadius: 10,
    elevation: 0
  },
  modalRight: {
    backgroundColor: Color.white,
    height: 45,
    borderBottomRightRadius: 10,
    elevation: 0,
    borderWidth: 1,
    borderColor: Color.primaryColor
  },
  counter: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 5,
    width: 120,
    height: 40,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.lightColor
  },
  buttonFooter: {
    backgroundColor: Color.primaryColor,
    height: 45,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 0
  },
}

Styles.Container = {
  dashBoard: {
    flexDirection: 'row',
    height: 140,
    flex: 1
  },
  logo: {
    height: 100,
    flex: 1,
    paddingTop: 100,
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: Color.primaryBorder,
    borderRadius: 5,
    borderWidth: 1
  },
  inputBox: {
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: Color.container,
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    position: 'absolute',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
   
    padding: 20,
    elevation: 2
  },
  cardUnderline: {
    flexDirection: 'row',
    padding: 20,
    borderColor: Color.greySeparator,
    borderBottomWidth: 1
  },
  header: {
    padding: 0,
    elevation: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  headerImageBg: {
    flex: 1,
    width: deviceWidth,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 20,
    //justifyContent:"center" 
  },
  loginCard:{
    backgroundColor:'white'
  },
  chatDate:{
    paddingLeft: 15, 
    paddingRight: 15, 
    borderRadius: 5, 
    backgroundColor: Color.primaryBorder , 
    alignSelf:'center'
  },
  diskusiBox:{
    borderRadius:5, 
    borderColor: Color.prymaryColor, 
    borderWidth:1, 
    padding:15,
  },
  midleAmount:{
    borderLeftWidth: 1,
    borderRightWidth: 1, 
    borderColor: Color.lightColor
  },
  akun: {
    width: deviceWidth,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
}

Styles.Text = {
  login: {
    fontSize: 20,
    fontFamily: Constants.fontFamilyBold,
    textAlign:'center',
  },
  lihatSemua: {
    color: Color.primaryColor,
    fontSize: 14,
    fontFamily: Constants.fontFamily,
  },
  dashboardHead: {
    color: Color.primaryColor,
    fontSize: 14,
    fontFamily: Constants.fontFamilyBold,
  },
  dashboardHeadRed: {
    color: Color.red,
    fontSize: 14,
    fontFamily: Constants.fontFamilyBold,
  },
  dashboardHeadWhite: {
    color: Color.white,
    fontSize: 14,
    fontFamily: Constants.fontFamilyBold,
  },
  input: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.primaryText,
  },
  inputLogin: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.white,
  },
  header: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.white,
    fontSize: 16
  },
  headerWhite: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.primaryColor,
    fontSize: 16
  },
  footer: {
    fontFamily: Constants.fontFamily,
    color: Color.white,
    fontSize: 12
  },
  footerBold: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.white,
    fontSize: 12
  },
  button: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.white,
    fontSize: 16
  },
  buttonOut: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.primaryColor,
    fontSize: 16
  },
  buttonOutOrange: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.orange,
    fontSize: 16
  },
  buttonSmall: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.white,
    fontSize: 14
  },
  buttonSmallBlue: {
    fontFamily: Constants.fontFamilyBold,
    color: Color.primaryColor,
    fontSize: 14
  },

  tiny8: {
    fontFamily: Constants.fontFamily,
    fontSize: 8,
    color: Color.primaryText,
  },

  tiny9Light: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 9,
    color: Color.lightColor,
  },

  tiny: {
    fontFamily: Constants.fontFamily,
    fontSize: 10,
    color: Color.primaryText,
  },
  tinyLight: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 10,
    color: Color.white,
  },
  tinyLightGrey: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 10,
    color: Color.lightColor,
  },
  tinyRedLight: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 10,
    color: Color.orange,
  },
  tinyIta: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 10,
    color: Color.primaryText,
  },
  tinyBlueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 10,
    color: Color.primaryColor,
  },
  small: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.primaryText,
  },
  smallThin: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.greyBorder,
  },
  smallThinita: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 12,
    color: Color.greyBorder,
  },
  smallIta: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 12,
    color: Color.primaryText,
  },
  smallWhite: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.white,
  },
  smallWhiteBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 12,
    color: Color.white,
  },
  smallBlue: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.primaryColor,
  },
  smallBlueItaLight: {
    fontFamily: Constants.fontFamilyLightItalic,
    fontSize: 12,
    color: Color.primaryColor,
  },
  smallRed: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.red,
  },
  smallLight: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 12,
    color: Color.primaryText,
  },
  smallLightWhite: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 12,
    color: Color.white,
  },
  smallRedLight: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 12,
    color: Color.red,
  },
  smallGreyLight: {
    fontFamily: Constants.fontFamilyLight,
    fontSize: 12,
    color: Color.lightColor,
  },
  smallGold: {
    fontFamily: Constants.fontFamily,
    fontSize: 12,
    color: Color.gold,
  },
  smallBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 12,
    color: Color.primaryText,
  },
  smallBoldBlue: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 12,
    color: Color.primaryColor,
  },
  smallBoldGrey: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 12,
    color: Color.primaryText,
  },
  mediumBoldWhite: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 14,
    color: Color.white,
  },
  medium: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.primaryText,
  },
  mediumIta: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 14,
    color: Color.primaryText,
  },
  mediumThin: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.greyBorder,
  },
  mediumBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 14,
    color: Color.primaryText,
  },
  mediumBoldBlue: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 14,
    color: Color.primaryColor,
  },
  mediumWhite: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.white,
  },
  mediumWhiteLine: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.white,
    textDecorationLine: 'underline'
  },
  mediumWhiteBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 14,
    color: Color.white,
  },
  mediumBlue: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.primaryColor,
  },
  mediumBlueIta: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 14,
    color: Color.primaryColor,
  },
  mediumBlueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 14,
    color: Color.primaryColor,
  },
  mediumBlueBoldIta: {
    fontFamily: Constants.fontFamilyBoldItalic,
    fontSize: 14,
    color: Color.primaryColor,
  },
  mediumGrey: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.placeholderText,
  },
  mediumOrange: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.orange,
  },
  blueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 16,
    color: Color.primaryColor,
  },
  default: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.primaryText,
  },
  defaultBold: {
    color: Color.primaryText,
    fontSize: 16,
    fontFamily: Constants.fontFamilyBold,
  },
  blue: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.primaryColor,
  },
  blueIta: {
    fontFamily: Constants.fontFamilyItalic,
    fontSize: 16,
    color: Color.primaryColor,
  },
  red:{
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.red,

  },
  white: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.white,
  },
  whiteBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 16,
    color: Color.white,
  },
  blueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 16,
    color: Color.primaryColor,
  },
  thin: {
    fontFamily: Constants.fontFamily,
    fontSize: 16,
    color: Color.backgroundBox,
  },
  large: {
    fontFamily: Constants.fontFamily,
    fontSize: 18,
    color: Color.primaryText,
  },
  largeThin: {
    fontFamily: Constants.fontFamily,
    fontSize: 18,
    color: Color.greyBorder,
  },
  largeWhite: {
    fontFamily: Constants.fontFamily,
    fontSize: 18,
    color: Color.white,
  },
  largeBlueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 18,
    color: Color.primaryColor,
  },
  largeWhiteBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 18,
    color: Color.white,
  },
  jumboBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 22,
    color: Color.primaryText,
  },
  jumboBlueBold: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 22,
    color: Color.primaryColor,
  },
  title: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Color.primaryColor,
  },
  textUnderline :{
    textDecorationLine :'underline'
  }
}

Styles.Checkbox = {
  default: {
    backgroundColor: Color.white,
    borderColor: Color.primaryColor,
    borderRadius: 1,
  },
  shape:{
    padding: 3, 
    borderRadius: 5,
  }
}

Styles.Image = {
  tiny: {
    height: 10,
    width: 10,
  },
  logo: {
    height: 90,
    width: 90,
  },
  icon27: {
    height: 27,
    width: 27,
  },
  icon54: {
    height: 54,
    width: 54,
  },
  icon60: {
    height: 60,
    width: 60,
  },
  icon80: {
    height: 80,
    width: 80,
  },
  icon100: {
    height: 100,
    width: 100,
  },
  iconInput: {
    height: 20,
    width: 20,
    marginRight: 20
  },
  iconTabSmall: {
    height: 15,
    width: 15,
  },
  iconTab: {
    height: 20,
    width: 20,
  },
  iconCard: {
    height: 30,
    width: 30,
  },
  iconHeader: {
    height: 40,
    width: 40
  },
  iconCardBig: {
    height: 55,
    width: 55,
  },
  iconCardSmall: {
    height: 15,
    width: 15
  },
  bank: {
    height: 20,
    width: 50,
  },
  akun: {
    height: 67,
    width: 67,
    borderRadius: 90
  },
  EditAkun: {
    height: 107,
    width: 107,
    borderRadius: 90
  },
  user: {
    height: 55,
    width: 55,
    borderRadius: 90
  },

}

Styles.Modal = {
  modal1: {
    height: 250,
    width: width * 0.8,
    borderRadius: 10,
    backgroundColor: 'transparent'
  },


}

Styles.Filter = {
  container:{
    backgroundColor:Color.white,
    elevation:5,
    height:60,
    flexDirection:'row'
  },
  layout:{
    flex:1 ,
    marginTop:5,
    marginBottom:5
  },
  separator:{
    borderRightWidth: 1,
    borderColor: Color.primaryBorder
  }
}
Styles.Icon = {
  small: {
    fontSize: 14
  },
  toggle: {
    fontSize: 14,
    color: Color.primaryText
  },
  mediumWhite: {
    fontSize: 20,
    color: Color.white
  },
  btnIcon: {
    fontSize: 27,
    color: Color.white
  },
  mediumBlue: {
    fontSize: 20,
    color: Color.primaryColor
  },
  bigGrey:{
    fontSize: 30, 
    color: Color.primaryText 
  }
}

export default Styles;
