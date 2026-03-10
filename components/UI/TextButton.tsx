import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { App_Colors } from "../../constants/Colors";

type TextButtonProps = {
  icon: string;
  label: string;
  iconColor: string;
  onPressButtonHandler: () => void;
};

const TextButton = ({
  icon,
  label,
  iconColor,
  onPressButtonHandler,
}: TextButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressButtonHandler}
      activeOpacity={0.9}
      style={[styles.btn]}
    >
      <Text style={[styles.btnLabel]}>{label}</Text>
      <SvgUri width={20} height={20} uri={icon} fill={iconColor} />
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLabel: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.8,
    fontFamily: "Halcom_Regular",
    color: App_Colors.Primary_Color_Text,
    marginRight: 4,
  },
});
