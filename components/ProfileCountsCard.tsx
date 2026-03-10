import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { App_Colors } from "../constants/Colors";

type ProfileCountsCardProps = {
  count: number;
  countHeading: string;
};
const ProfileCountsCard = ({ count, countHeading }: ProfileCountsCardProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.mainText]}>{count}</Text>
      <Text style={[styles.subText]}>{countHeading}</Text>
    </View>
  );
};

export default ProfileCountsCard;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 70,
    backgroundColor: App_Colors.Primary_Color_Bg,
    borderRadius: 12,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontFamily: "Halcom_Bold",
    fontSize: 16,
    fontWeight: "600",
    color: App_Colors.Neutral_Color_8,
  },
  subText: {
    fontFamily: "Halcom_Regular",
    fontSize: 11,
    fontWeight: "400",
    color: App_Colors.Neutral_Color_6,
    marginTop: 8,
  },
});
