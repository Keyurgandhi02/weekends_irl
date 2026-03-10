import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { App_Colors } from "../../constants/Colors";

type detailsProps = {
  title: string;
  desc: string;
};

const HangoutsDetailsHead = ({ title, desc }: detailsProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]} numberOfLines={2}>
        {title}
      </Text>
      <Text style={[styles.description]} numberOfLines={2}>
        {desc}
      </Text>
    </View>
  );
};

export default HangoutsDetailsHead;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
    color: App_Colors.Text_Black,
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Halcom_Regular",
    color: App_Colors.Neutral_Color,
    marginTop: 8,
  },
});
