import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import GlobalButton from "../components/common/GlobalButton";
import MultiInput from "../components/MultiInput";
import GlobalCheckBox from "../components/UI/GlobalCheckBox";
import { App_Colors } from "../constants/Colors";
import { globalStyles } from "../utils/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProfileSetupStep1: React.FC = () => {
  const navigation: any = useNavigation();
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = useState(false);
  const onChangeTextHandler = () => {};

  const onNextScreenHandler = () => {
    navigation.navigate("ProfileSetupStep2");
  };
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={[styles.topContainer]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.topHeadingContainer]}>
            <Text style={[styles.topHeadingText]}>Profile Setup</Text>
            <Text style={[styles.topSubHeadingText, { textAlign: "center" }]}>
              Tell us about yourself for better connections
            </Text>
          </View>

          <View>
            <Text style={[styles.centerContainerText]}>I'm here for</Text>
            <GlobalCheckBox
              label="Friends 😀"
              checkboxRef={bouncyCheckboxRef}
              checkboxState={checkboxState}
              setCheckboxState={setCheckboxState}
              fillColor={App_Colors.Primary_Color_Base}
              unFillColor={App_Colors.White}
            />

            <GlobalCheckBox
              label="Networking 💼"
              checkboxRef={bouncyCheckboxRef}
              checkboxState={checkboxState}
              setCheckboxState={setCheckboxState}
              fillColor={App_Colors.Primary_Color_Base}
              unFillColor={App_Colors.White}
            />
            <GlobalCheckBox
              label="Not Decided Yet! 🤔"
              checkboxRef={bouncyCheckboxRef}
              checkboxState={checkboxState}
              setCheckboxState={setCheckboxState}
              fillColor={App_Colors.Primary_Color_Base}
              unFillColor={App_Colors.White}
            />
          </View>

          <MultiInput
            label="Bio"
            isLabelVisible={true}
            placeholder="Tell us about yourself, your interests, and what you're looking for..."
            numberOfLines={4}
            onChangeTextHandler={onChangeTextHandler}
          />

          <GlobalButton
            title="Next"
            onClickHandler={onNextScreenHandler}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    width: wp("100%"),
    paddingHorizontal: RFValue(16),
  },
  topHeadingContainer: {
    alignItems: "center",
  },
  topHeadingText: {
    color: App_Colors.Black,
    fontSize: RFValue(20),
    fontWeight: "500",
    fontFamily: "Halcom_Bold",
    padding: RFValue(10),
  },
  topSubHeadingText: {
    color: App_Colors.Neutral_Color,
    fontSize: RFValue(14),
    fontWeight: "400",
    fontFamily: "Halcom_Medium",
  },
  buttonContainer: {
    height: RFValue(48),
    backgroundColor: App_Colors.Primary_Color_Base,
    borderRadius: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: App_Colors.White,
    fontSize: RFValue(16),
    fontFamily: "Halcom_Regular",
    fontWeight: "500",
  },
  centerContainerText: {
    color: App_Colors.Black,
    fontSize: RFValue(16),
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
    paddingHorizontal: RFValue(10),
    marginBottom: RFValue(10),
    marginTop: 30,
  },
});

export default ProfileSetupStep1;
