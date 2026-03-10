import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import HangoutsDetailsHead from "./HangoutsDetailsHead";
import { App_Colors } from "../../constants/Colors";
import HangoutsOnlineDetails from "./HangoutsOnlineDetails";

type hangoutDetailsProps = {
  details: {
    hang_title: string;
    hang_desc: string;
    hang_link_icon: string;
    hang_link_title: string;
    hang_link_btn_text: string;
  };
  navigation: any;
};
const HangoutsDetails = ({ details, navigation }: hangoutDetailsProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("HangoutDetails")}
    >
      <HangoutsDetailsHead
        title={details?.hang_title}
        desc={details?.hang_desc}
      />
      <HangoutsOnlineDetails
        linkIcon={details?.hang_link_icon}
        linkTitle={details?.hang_link_title}
        linkBtnText={details?.hang_link_btn_text}
      />
      <View style={[styles.hBorder]} />
    </TouchableOpacity>
  );
};

export default HangoutsDetails;

const styles = StyleSheet.create({
  hBorder: {
    borderBottomColor: App_Colors.White,
    borderBottomWidth: 0.45,
    marginHorizontal: 15,
    marginTop: 10,
  },
});
