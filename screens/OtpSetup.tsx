import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { globalStyles } from "../utils/styles";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SvgUri } from "react-native-svg";
import GlobalButton from "../components/common/GlobalButton";
import { App_Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import GlobalInput from "../components/UI/GlobalInput";

const OtpSetup = () => {
  const navigation: any = useNavigation();
  const authHandler = () => {
    navigation.navigate("OtpVerify");
  };

  const onInputChangeHandler = () => {};
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <KeyboardAvoidingView
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        style={[styles.mainContainer]}
      >
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/otp1.png?alt=media&token=f730b026-444a-4a9c-97a8-6fb00dbfe4fc",
          }}
          style={[styles.bg_image]}
          alt="User Profile"
        />

        <View style={[styles.topContainer]}>
          <Text style={[styles.topHeadingText]}>Enter Your Mobile Number</Text>
          <Text style={[styles.topSubHeadingText]}>
            We Will send you a Confirmation Code
          </Text>
        </View>

        <GlobalInput
          isIconVisible={true}
          icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/twemoji_flag-india.svg?alt=media&token=c721b979-f83b-44b8-a51a-664eee35050f"
          placeholder="Mobile Number"
          onInputChangeHandler={onInputChangeHandler}
          keyboardType="number-pad"
          labelVisible={false}
          label=""
        />

        <View style={[styles.btnContainer]}>
          <GlobalButton
            title="Verify"
            onClickHandler={authHandler}
            buttonContainer={{ height: 55, width: "100%" }}
            buttonText={{
              color: App_Colors.White,
              secondColor: App_Colors.Primary_Color_Base,
              fontSize: 16,
            }}
            isDisabled={false}
            secondaryButton={false}
            isIcon={false}
            icon=""
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpSetup;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: RFValue(16),
  },
  bg_image: {
    width: wp("100%"),
    height: hp("45%"),
    resizeMode: "contain",
  },
  topContainer: {
    alignItems: "center",
    width: wp("100%"),
  },
  topHeadingText: {
    color: App_Colors.Text_Black,
    fontFamily: "Halcom_Medium",
    fontSize: 22,
    fontWeight: "500",
  },
  topSubHeadingText: {
    color: App_Colors.Neutral_Color,
    fontFamily: "Halcom_Regular",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.75,
    borderBottomColor: App_Colors.Neutral_Color,
    padding: 5,
  },
  flagIcon: {
    marginRight: 10,
  },
  input: {
    borderLeftWidth: 0.75,
    borderLeftColor: App_Colors.Neutral_Color,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: 18,
    color: App_Colors.Primary_Color_Text,
  },
  btnContainer: {
    width: wp("90%"),
    marginTop: 20,
  },
});
