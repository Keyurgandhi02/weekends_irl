import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import GlobalButton from "./common/GlobalButton";
import { NoInternetText } from "../constants/Strings";
import { App_Colors } from "../constants/Colors";

const NoInternetConnection = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.mainContainer]}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/no-internet.gif?alt=media&token=9cfdea70-3375-46e8-b0a2-3ac71d6a271b",
          }}
          style={[styles.image]}
        />
        <View style={[styles.textContainer]}>
          <Text style={[styles.headingText]}>{NoInternetText.heading1}</Text>
          <Text style={[styles.infoText]}>{NoInternetText.heading2}</Text>
        </View>
        <View style={{ width: "50%" }}>
          <GlobalButton
            title="Try Again"
            buttonContainer={[styles.buttonContainer]}
            buttonText={[styles.buttonText]}
            // onClickHandler={authHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoInternetConnection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: App_Colors.White,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    minWidth: 280,
    maxWidth: 300,
    minHeight: 300,
    maxHeight: 320,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    color: App_Colors.Black,
    fontWeight: "600",
    marginBottom: 20,
    padding: 10,
    lineHeight: 39,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: App_Colors.Neutral_Color_5,
    fontWeight: "400",
    padding: 3,
  },
  buttonContainer: {
    height: 56,
    backgroundColor: App_Colors.Primary_Color_Base,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: App_Colors.White,
    fontSize: 16,
    fontFamily: "Halcom_Regular",
    fontWeight: "500",
  },
});
