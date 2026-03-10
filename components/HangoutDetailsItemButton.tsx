import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { App_Colors } from "../constants/Colors";
import { SvgUri } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

type HangoutButtonProps = {
  label: string;
  extraLabel: string;
  icon: string;
  isIcon: boolean;
  isExtraText: boolean;
  onDetailsHandler: () => void;
};

const HangoutDetailsItemButton = ({
  label,
  icon,
  isIcon,
  isExtraText,
  extraLabel,
  onDetailsHandler,
}: HangoutButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.9}
      onPress={onDetailsHandler}
    >
      <View style={[styles.subContainer]}>
        <View style={{ flexDirection: "column" }}>
          <Text style={[styles.label]}>{label}</Text>
          {isExtraText && <Text style={[styles.subLabel]}>{extraLabel}</Text>}
        </View>
      </View>
      {isIcon && <SvgUri width={RFValue(20)} height={RFValue(20)} uri={icon} />}
    </TouchableOpacity>
  );
};

export default HangoutDetailsItemButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: App_Colors.Neutral_Color_2,
    paddingTop: RFValue(16),
    paddingBottom: RFValue(16),
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: App_Colors.Primary_Color_Text,
    fontSize: RFValue(12),
    fontFamily: "Halcom_Medium",
    fontWeight: "400",
  
  },
  subLabel: {
    color: App_Colors.Neutral_Color,
    fontSize: RFValue(10),
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
    marginTop: RFValue(5),
  },
});
