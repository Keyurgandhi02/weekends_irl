import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import OrganizerDetailsCard from "./OrganizerDetailsCard";
import { App_Colors } from "../constants/Colors";

const UserProfileJoinedHangoutsItem = ({ userHangouts }: any) => {
  return (
    <OrganizerDetailsCard
      mainHeading=""
      data={userHangouts}
      userType=""
      style={{
        mainContainer: styles.mainContainer,
        userAvatar: styles.userAvatar,
      }}
    />
  );
};

export default UserProfileJoinedHangoutsItem;

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    backgroundColor: App_Colors.White,
    borderWidth: 1,
    borderColor: App_Colors.Neutral_Color_2,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
