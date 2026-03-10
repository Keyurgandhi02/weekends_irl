import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { App_Colors } from "../constants/Colors";

const JoinedMembersListItem = ({ icon, id, name }: any) => {
  return (
    <View key={id} style={[styles.container]}>
      <Image
        source={{
          uri: icon,
        }}
        style={[styles.userAvatar]}
        alt="User"
      />
      <Text numberOfLines={1} style={[styles.title]}>
        {name}
      </Text>
    </View>
  );
};

export default JoinedMembersListItem;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    color: App_Colors.Neutral_Color,
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "Halcom_Regular",
    marginTop: 5,
  },
});
