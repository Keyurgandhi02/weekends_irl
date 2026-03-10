import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
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
import GlobalButton from "../components/common/GlobalButton";
import { App_Colors } from "../constants/Colors";
import { Permissions } from "expo-permissions";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const authHandler = () => {};
  useEffect(() => {
    requestSMSPermissions();
  }, []);

  const requestSMSPermissions = async () => {
    try {
      const { status } = await Permissions.requestForegroundPermissionsAsync(
        Permissions.SMS
      );
      if (status === "granted") {
        // Permission granted, you can now listen for incoming SMS messages
      } else {
        // Permission denied
        console.error("SMS permission denied");
      }
    } catch (error) {
      console.error("Error requesting SMS permissions:", error);
    }
  };

  const handleOTPChange = (otp: string) => {
    setOtp(otp);
  };

  const handleOTPSubmit = () => {
    // Implement your OTP verification logic here
    console.log("Entered OTP:", otp);
    navigation.navigate("ProfileSetupStep1");
    // Call your API to verify the OTP on the server
  };

  useEffect(() => {
    // Simulate receiving OTP after 5 seconds
    const timeoutId = setTimeout(() => {
      handleOTPChange("139727"); // Simulate receiving OTP '123456'
      handleOTPSubmit(); // Trigger OTP submission
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <KeyboardAvoidingView
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        style={[styles.mainContainer]}
      >
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/otp2.png?alt=media&token=a0faee24-488b-473a-97ef-8e8a9f283793",
          }}
          style={[styles.bg_image]}
          alt="OTP Verifications"
        />

        <View style={[styles.topContainer]}>
          <Text style={[styles.topHeadingText]}>Enter Verification code</Text>
          <Text style={[styles.topSubHeadingText]}>
            We are automatically detecting a SMS send to your mobile number
          </Text>
        </View>

        <OTPInputView
          pinCount={4}
          autoFocusOnLoad
          code={otp}
          onCodeChanged={handleOTPChange}
          onCodeFilled={handleOTPSubmit}
          style={{ height: 80 }}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />

        <View style={[styles.btnContainer]}>
          <GlobalButton
            title="Verify"
            onClickHandler={authHandler}
            buttonContainer={{ height: 55, width: "100%" }}
            buttonText={{
              color: App_Colors.White,
              secondColor: App_Colors.Primary_Color_Base,
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

export default OtpVerify;

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
    textAlign: "center",
  },
  topSubHeadingText: {
    color: App_Colors.Neutral_Color,
    fontFamily: "Halcom_Regular",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
    textAlign: "center",
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
  underlineStyleBase: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    color: App_Colors.Primary_Color_Text,
    fontSize: 24,
  },
  underlineStyleHighLighted: {
    borderColor: App_Colors.Primary_Color_Base,
  },
});
