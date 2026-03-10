import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { App_Colors } from "../../constants/Colors";

type userDetailsProps = {
  user: {
    name: string;
    location: string;
    avatar: string;
  };
  timeStamp: string;
  navigation: any;
};

const UserDetails = ({ user, timeStamp, navigation }: userDetailsProps) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.navigate("UserProfile")}
    >
      <View style={[styles.leftContainer]}>
        <Image
          source={{
            uri: user?.avatar,
          }}
          style={[styles.avatar]}
          alt="User Profile"
        />

        <View style={[styles.midContainer]}>
          <Text style={[styles.username]}>{user?.name}</Text>
          <Text style={[styles.userlocation]}>{user?.location}</Text>
        </View>
      </View>

      <Text style={[styles.postedtime]}>{timeStamp}</Text>
    </TouchableOpacity>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "white",
    height: 74,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: "space-between",
    width: "100%",
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    fontFamily: "Halcom_Bold",
    fontSize: 16,
    color: App_Colors.Text_Black,
  },
  userlocation: {
    fontFamily: "Halcom_Light",
    fontSize: 12,
  },
  postedtime: {
    fontFamily: "Halcom_Light",
    fontSize: 11,
  },
});
