import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { App_Colors } from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

type DatePickerButtonProps = {
  onPressHandler: () => void;
  value: string;
  icon: string;
  heading: string;
};
const DatePickerButton = ({
  heading,
  onPressHandler,
  value,
  icon,
}: DatePickerButtonProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.heading]}>{heading}</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.datePickerBtn]}
        onPress={onPressHandler}
      >
        <Text style={[styles.dateText]}>{value}</Text>
        <SvgUri
          width="24"
          height="24"
          uri={icon}
          fill={App_Colors.Primary_Color_Active}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
  },
  heading: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: App_Colors.Text_Black,
    fontFamily: "Halcom_Medium",
  },
  datePickerBtn: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: App_Colors.Neutral_Color_2,
    height: 50,
    paddingLeft: 8,
    justifyContent: "space-between",
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  dateText: {
    color: App_Colors.Neutral_Color_5,
    fontSize: 14,
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
  },
});
