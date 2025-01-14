import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeQR = Platform.OS === "ios" ? 14 : 17;
const txtSize = Platform.OS === "ios" ? 13 : 15;
const marginEcoLogo = Platform.OS === "ios" ? 130 : 150;
const txtSend = Platform.OS === "ios" ? 36 : 40;
const txtTemperatura = Platform.OS === "ios" ? 12 : 15;
const scanQrContainer = Platform.OS === "ios" ?  185: 180;

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export const stylesM = StyleSheet.create({
  // =====================================================================
  // UNITY VARIABLES
  // =====================================================================
  textColorWhite: {
    color: "white",
  },

  textBold: {
    fontWeight: "bold",
  },

  textMedium: {
    fontWeight: "500",
  },

  textLight: {
    fontWeight: "normal",
  },

  // fontSizeTwelve: {
  //   fontSize: RFValue(fontSizeTwelveIos),
  // },

  fontSizeFourteen: {
    fontSize: RFValue(12),
  },

  fontSizeSixteen: {
    fontSize: RFValue(13),
  },

  fontSizeEighteen: {
    fontSize: RFValue(15),
  },

  fontSizeTwenty: {
    fontSize: RFValue(17),
  },

  fontSizeTwentyTwo: {
    fontSize: RFValue(18),
  },

  fontSizeTwentyFour: {
    fontSize: RFValue(20),
  },

  fontSizeTwentyEight: {
    fontSize: RFValue(23),
  },

  fontSizeFortyEight: {
    fontSize: RFValue(40),
  },

  fontSizeSixtyFour: {
    fontSize: RFValue(53.5),
  },

  fontSizeOneHundredTwenty: {
    fontSize: RFValue(100),
  },

  backgroundRed: {
    backgroundColor: "#764129",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },

  radiusFour: {
    borderRadius: 4,
  },

  radiusFive: {
    borderRadius: 5,
  },

  radiusSix: {
    borderRadius: 6,
  },

  radiusSeven: {
    borderRadius: 7,
  },

  radiusTen: {
    borderRadius: 10,
  },

  radiusSixteen: {
    borderRadius: 16,
  },

  radiusTwenty: {
    borderRadius: 20,
  },

  widthPercentageFive: {
    width: "50%",
  },

  // =====================================================================
  // END UNITY VARIABLES.
  // =====================================================================

  //Boton verde general
  botonGreen: {
    backgroundColor: "#5CB032",
    width: 105,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  //estilo general
  textAccount: {
    marginLeft: RFValue(8),
    marginTop: RFValue(18),
    color: "black",
    fontSize: 15,
    fontWeight: "300",
  },
  //********************** */

  //screen Splash

  EcoLogo: {
    resizeMode: "contain",
    width: RFValue(291),
    height: RFValue(291),
    marginVertical: RFValue(182),
  },

  //End Splash

  //Screen Register
  BacColor: {
    backgroundColor: "#c2ea5b",
  },
  NameScale: {
    width: RFValue(345),
    height: RFValue(138),
    resizeMode: "contain",
    marginTop: RFValue(170),
  },
  containerButtons: {
    marginTop: RFValue(23),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCreate: {
    borderWidth: 7,
    borderColor: "#5cb032",
    width: RFValue(228),
    height: RFValue(64),
    //padding: 15,
    borderRadius: 18,
    marginBottom: RFValue(14),
    backgroundColor: "white",
    justifyContent: "center",
  },
  textButtonCreate: {
    fontSize: 20,
    textAlign: "center",
  },
  //End Register

  //Login
  containerGeneral: {
    marginTop: RFValue(25),
  },
  containerBotonLogin: {
    marginTop: RFValue(27),
    justifyContent: "center",
    alignItems: "center",
  },
  botonGreenLogin: {
    backgroundColor: "#5CB032",
    width: RFValue(98),
    height: RFValue(46),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textBotonLogin: {
    fontWeight: "bold",
    textAlign: "center",
  },
  //End Login

  btnRegister: {
    width: 100,
    height: 50,
    backgroundColor: "green",
    margin: 20,
    borderRadius: 8,
  },

  // screen createaccount
  containerInterno: {
    marginLeft: RFValue(20),
  },
  wrapperCA: {
    marginTop: RFValue(20),
  },
  inputAccount: {
    width: RFValue(317),
    height: RFValue(45),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#5cb032",
    backgroundColor: "#c2ea5b",
    marginTop: RFValue(13),
    padding: RFValue(8),
  },
  textBoton: {
    fontWeight: "bold",
    margin: RFValue(6),
  },
  containerCaRegister: {
    alignItems: "center",
    justifyContent: "center",
  },
  //End CreateAccount

  txtButtonSend: {
    backgroundColor: "#5CB032",
    width: 105,
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 8,
    padding: 13,
    paddingLeft: 23,
    right: -105,
    top: 70,
    fontWeight: "300",
  },

  //

  //Balance
  textInputBalance: {
    backgroundColor: "#c2ea5b",
    width: RFValue(295),
    height: RFValue(290),
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(73),
    borderRadius: 30,
  },

  textBalance: {
    fontSize: RFValue(92),
    marginTop: RFValue(-290),
    fontWeight: "bold",
  },

  ecoPunto: {
    width: RFValue(155),
    height: RFValue(155),
  },

  containerBotones: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: RFValue(46),
  },

  botonSend: {
    height: RFValue(45),
    width: RFValue(110),
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
  },
  botonSend2: {
    height: RFValue(45),
    width: RFValue(110),
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: RFValue(55),
  },

  logoECOnomY: {
    height: RFValue(100),
    width: RFValue(272),
    resizeMode: "contain",
    marginTop: RFValue(marginEcoLogo),
  },

  //end Balance

  //Drawer
  containerDrawer: {
    marginTop: RFValue(20),
  },
  botonMenuDrawer: {
    margin: RFValue(20),
  },
  textMenuDrawer: {
    fontWeight: "bold",
    fontSize: RFValue(17),
    marginLeft: RFValue(3),
  },
  containerLogout: {
    marginTop: RFValue(95),
    alignItems: "center",
  },
  backgroundLogout: {
    backgroundColor: "#ff7777",
    height: RFValue(37),
    width: RFValue(143),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    color: "black",
    fontSize: RFValue(13),
    fontWeight: "bold",
  },
  //end Drawer

  //Receive
  containerboxReceive: {
    marginTop: RFValue(9),
    marginLeft: RFValue(-227),
    height: RFValue(37),
    width: RFValue(145),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c2ea5b",
  },
  boxReceive: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  textInputBalanceReceive: {
    backgroundColor: "#c2ea5b",
    width: RFValue(300),
    height: RFValue(292),
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(27),
    borderRadius: 30,
  },
  containerimgQR: {
    marginTop: RFValue(36),
    marginLeft: RFValue(-165),
  },
  imageQR: {
    height: RFValue(91),
    width: RFValue(91),
  },
  botonGenerate: {
    backgroundColor: "#c2ea5b",
    height: RFValue(36),
    width: RFValue(182),
    borderRadius: 80,
    marginTop: RFValue(-63),
    marginLeft: RFValue(135),
    elevation: 3,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  textGenerate: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(fontSizeQR),
    fontWeight: "bold",
  },
  containerNumCuenta: {
    width: RFValue(219),
    height: RFValue(91),
    marginTop: RFValue(72),
    alignItems: "center",
  },
  textContainerNumCuenta: {
    fontSize: RFValue(18),
  },
  textInputNumCuenta: {
    width: RFValue(210),
    height: RFValue(37),
    borderColor: "#c2ea5b",
    borderWidth: 2,
    borderRadius: 80,
    margin: RFValue(9),
    padding: RFValue(9),
  },
  containerCopy: {
    marginLeft: RFValue(270),
    marginTop: RFValue(-55),
    height: RFValue(30),
    width: RFValue(25),
  },
  //end Receive
  //GenerateQR
  containerQR: {
    alignItems: "center",
    marginTop: RFValue(40),
  },
  boton: {
    height: RFValue(45),
    width: RFValue(75),
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: RFValue(40),
    margin: RFValue(12),
    borderWidth: 1,
    padding: 10,
  },

  //end GenerateQR

  //Send
  containerboxSend: {
    marginTop: RFValue(15),
    marginLeft: RFValue(-240),
    alignItems: "center",
    justifyContent: "center",
  },
  boxSend: {
    height: RFValue(txtSend),
    width: 150,
    backgroundColor: "#c2ea5b",
    textAlign: "center",
    // textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: RFValue(7),
  },
  // checkbox: {
  //   alignSelf: "center",
  // },
  containerReceptor: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -65,
  },
  botonCheck: {
    padding: 10,
  },
  imgAmigo: {
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
  containerCant: {
    marginLeft: -60,
    marginTop: 40,
  },
  textInputSend: {
    width: RFValue(260),
    height: RFValue(40),
    borderColor: "#c2ea5b",
    borderWidth: 2,
    borderRadius: 80,
    marginTop: RFValue(10),
    padding: RFValue(10),
    marginBottom: RFValue(20),
  },
  textActions: {
    marginTop: RFValue(30),
    fontWeight: "bold",
  },
  dropDown: {
    width: RFValue(170),
    height: RFValue(70),
    marginTop: RFValue(25),
    padding: RFValue(5),
    borderColor: "#c2ea5b",
    borderWidth: 2,
  },
  containerQRSend: {
    marginTop: RFValue(-83),
    marginLeft: RFValue(scanQrContainer),
  },
  botonScanSend: {
    backgroundColor: "#c2ea5b",
    height: RFValue(40),
    width: RFValue(140),
    borderRadius: 80,
    marginTop: RFValue(20),
    marginLeft: RFValue(170),
    elevation: 3,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  containerbtns: {
    flexDirection: "row",
    marginTop: RFValue(50),
  },
  btnSend: {
    backgroundColor: "#00e37c",
    width: RFValue(115),
    height: RFValue(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
    marginLeft: RFValue(20),
  },
  textBtnSend: {
    fontSize: RFValue(txtSize),
    fontWeight: "bold",
  },
  btnBack: {
    backgroundColor: "#00e37c",
    width: RFValue(115),
    height: RFValue(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
  },
  //end Send

  //ReaderQR
  container_scanner: {
    width: RFValue(500),
    height: RFValue(340),
    alignItems: "center",
    justifyContent: "center",
  },
  BarCode: {
    alignItems: "center",
    justifyContent: "center",
  },

  colorqr: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "4%",
  },
  containerReScan: {
    marginTop: 665,
    alignItems: "center",
    flexDirection: "row",
  },

  botonReScan: {
    height: 50,
    width: 150,
    borderRadius: 6,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
  },

  botonScan: {
    height: 50,
    width: 80,
    borderRadius: 6,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  //end ReaderQR

  //Indicators
  scrollView: {
    marginTop: RFValue(40),
    marginHorizontal: RFValue(20),
    // display: "flex",
  },
  containerIndicator: {
    marginTop: RFValue(40),
    alignItems: "center",
  },
  txtSostenibilidad: {
    fontSize: RFValue(40),
    fontWeight: "bold",
  },
  indicator: {
    resizeMode: "contain",
    marginTop: RFValue(-40),
    height: RFValue(330),
    width: RFValue(300),
  },
  txtGraficaG: {
    fontSize: RFValue(20),
    marginTop: RFValue(-15),
    fontWeight: "bold",
  },
  txtGraficaGp: {
    fontSize: RFValue(20),
    marginTop: RFValue(-25),
    fontWeight: "bold",
  },
  indicatorTwo: {
    resizeMode: "contain",
    marginTop: RFValue(-35),
    height: RFValue(350),
    width: RFValue(300),
  },
  indicatorThree: {
    resizeMode: "contain",
    marginTop: RFValue(-30),
    height: RFValue(350),
    width: RFValue(350),
  },
  //End Indicators

  //History
  containerHistorial: {
    marginTop: RFValue(45),
    alignItems: "center",
  },
  txtHistorial: {
    fontSize: RFValue(25),
    fontWeight: "bold",
  },
  dropDownHistory: {
    width: RFValue(250),
    height: RFValue(70),
    marginTop: RFValue(25),
    padding: RFValue(5),
    borderColor: "#5cb032",
    borderWidth: 2,
  },
  textInputHistory: {
    height: RFValue(350),
    width: RFValue(300),
    backgroundColor: "#5cb032",
    marginTop: RFValue(150),
    borderRadius: 10,
  },
  //End History

  //Variables
  colorInputs: {
    backgroundColor: "#ffeb7b",
  },
  containerInputs: {
    marginTop: RFValue(50),
  },
  sectionOne: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTitulo: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    paddingTop: RFValue(10),
  },
  inputsVariables: {
    width: RFValue(135),
    height: RFValue(125),
    margin: RFValue(5),
    borderRadius: 20,
    alignItems: "center",
  },
  viewOne: {
    marginTop: RFValue(20),
    flexDirection: "row",
    textAlign: "center",
  },
  txtDates: {
    marginHorizontal: RFValue(15),
    fontSize: RFValue(13),
  },
  txtDates2: {
    marginHorizontal: RFValue(19.5),
    fontSize: RFValue(13),
  },
  txtDates3: {
    marginHorizontal: RFValue(10),
    fontSize: RFValue(13),
  },
  viewTwo: {
    flexDirection: "row",
    textAlign: "center",
  },
  txtDatesNum: {
    marginHorizontal: RFValue(20),
    fontSize: RFValue(13),
  },
  txtDatesNum1: {
    marginHorizontal: 17,
    fontSize: RFValue(13),
  },
  txtDatesNum2: {
    marginHorizontal: 15,
    fontSize: RFValue(13),
  },
  txtDatesNum3: {
    marginHorizontal: 21.2,
    fontSize: RFValue(13),
  },
  txtDatesNum4: {
    marginHorizontal: RFValue(23.5),
    fontSize: RFValue(13),
  },
  txtDatesNum5: {
    marginHorizontal: RFValue(15),
    fontSize: RFValue(13),
  },
  txtDatesNum6: {
    marginHorizontal: RFValue(25),
    fontSize: RFValue(13),
  },
  txtDatesNum7: {
    marginTop: RFValue(-50),
    marginHorizontal: RFValue(25),
    fontSize: RFValue(18),
  },
  txtDatesNum8: {
    marginTop: RFValue(-35),
    marginHorizontal: RFValue(25),
    fontSize: RFValue(18),
  },
  txtTituloT: {
    fontSize: RFValue(16),
    fontWeight: "bold",
    paddingTop: RFValue(10),
  },
  //Temperatura
  txtTituloTemperatura: {
    fontSize: RFValue(txtTemperatura),
    fontWeight: "bold",
    paddingTop: RFValue(10),
  },
  sectionTwo: {
    flexDirection: "column",
    alignItems: "center",
  },
  inputsVariabless: {
    width: RFValue(295),
    height: RFValue(90),
    paddingTop: RFValue(10),
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 20,
    marginTop: RFValue(10),
  },

  //End Variables
});
