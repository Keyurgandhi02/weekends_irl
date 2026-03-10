import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextButton from "./UI/TextButton";
import { App_Colors } from "../constants/Colors";

type topContainerProps = {
  label: string;
  icon: string;
  onPressButtonHandler: () => void;
};
const ModalizeTopCotainer = ({
  label,
  icon,
  onPressButtonHandler,
}: topContainerProps) => {
  return (
    <View style={[styles.filterTopContainer]}>
      <Text style={[styles.label]}>{label}</Text>
      <TextButton
        label="Reset"
        icon={icon}
        iconColor={App_Colors.Primary_Color_Text}
        onPressButtonHandler={onPressButtonHandler}
      />
    </View>
  );
};

export default ModalizeTopCotainer;

const styles = StyleSheet.create({
  label: {
    color: App_Colors.Black,
    fontFamily: "Halcom_Medium",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19.2,
  },
  filterTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 15,
    height: 50,
  },
});
