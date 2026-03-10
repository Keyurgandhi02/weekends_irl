import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { App_Colors } from "../constants/Colors";

type MultiInputProps = {
  label: string;
  isLabelVisible: boolean;
  placeholder: string;
  numberOfLines: number;
  onChangeTextHandler: (text: string) => void;
};

const MultiInput: React.FC<MultiInputProps> = ({
  label,
  isLabelVisible,
  placeholder,
  numberOfLines,
  onChangeTextHandler,
}) => {
  return (
    <View style={[styles.container]}>
      {isLabelVisible && <Text style={[styles.label]}>{label}</Text>}
      <TextInput
        style={[styles.input]}
        onChangeText={onChangeTextHandler}
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        selectionColor={App_Colors.Primary_Color_Base}
      />
    </View>
  );
};

export default MultiInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
    width: "100%",
  },
  label: {
    color: App_Colors.Text_Black,
    fontSize: RFValue(14),
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
    paddingHorizontal: 4,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: App_Colors.Neutral_Color_2,
    borderRadius: 12,
    paddingTop: 10,
    paddingLeft: 10,
    color: App_Colors.Neutral_Color_5,
    fontSize: 18,
    fontFamily: "Halcom_Regular",
    textAlignVertical: "top",
  },
});
