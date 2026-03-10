import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { App_Colors } from "../../constants/Colors";

type CheckBoxProps = {
  label: string;
  checkboxRef: any;
  checkboxState: boolean;
  setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>;
  fillColor: string;
  unFillColor: string;
};
const GlobalCheckBox = ({
  label,
  checkboxRef,
  checkboxState,
  setCheckboxState,
  fillColor,
  unFillColor,
}: CheckBoxProps) => {
  return (
    <View style={[styles.container]}>
      <BouncyCheckbox
        fillColor={fillColor}
        unfillColor={unFillColor}
        ref={(ref: any) => (checkboxRef = ref)}
        isChecked={checkboxState}
        disableText
        disableBuiltInState
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <Text style={[styles.label]}>{label}</Text>
    </View>
  );
};

export default GlobalCheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: App_Colors.Text_Black,
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
  },
});
