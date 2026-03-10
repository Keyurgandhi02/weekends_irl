import React, { useState } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import GlobalButton from "../components/common/GlobalButton";
import { App_Colors } from "../constants/Colors";
import { AuthScreenText } from "../constants/Strings";
import { globalStyles } from "../utils/styles";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Auth = () => {
  const navigation: any = useNavigation();
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const authHandler = () => {
    navigation.navigate("OtpSetup");
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={[styles.mainContainer]}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Frame%2011.png?alt=media&token=ca9a663d-e7c3-44c5-bfa7-b9b702880edf",
          }}
          style={[styles.bg_image]}
          alt="User Profile"
        />

        <View style={[styles.headingContainer]}>
          <Text style={[styles.mainHeading]}>
            Find <Text style={[styles.mainHeadingSpan]}>IRL</Text> friends with{" "}
            <Text style={[styles.mainHeadingSpan]}>Weekends</Text>!
          </Text>
          <Text style={[styles.subHeading]}>{AuthScreenText.subHeading}</Text>
        </View>

        <View style={[styles.btnContainer]}>
          <GlobalButton
            title="Get Started"
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
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: wp("100%"),
    flex: 1,
    paddingHorizontal: RFValue(16),
  },
  bg_image: {
    width: wp("100%"),
    height: hp("55%"),
    resizeMode: "contain",
  },
  headingContainer: {
    alignItems: "center",
  },
  mainHeading: {
    fontFamily: "Halcom_Extra_Bold",
    fontSize: RFValue(28),
    fontWeight: "500",
    color: App_Colors.Text_Black,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "Halcom_Medium",
    fontSize: RFValue(14),
    fontWeight: "400",
    color: App_Colors.Neutral_Color_5,
    marginTop: RFValue(7),
    textAlign: "center",
  },
  mainHeadingSpan: {
    color: App_Colors.Primary_Color_Base,
  },
  btnContainer: {
    width: wp("70%"),
  },
});
