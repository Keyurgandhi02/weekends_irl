import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { App_Colors } from "../constants/Colors";

type OrganizerDetailsProps = {
  mainHeading: string;
  userType: string;
  data: any;
  style: any;
};
const OrganizerDetailsCard = ({
  mainHeading,
  userType,
  data,
  style,
}: OrganizerDetailsProps) => {
  return (
    <>
      <Text style={[styles.mainText]}>{mainHeading}</Text>
      <View style={[styles.container, style.mainContainer]}>
        <Image
          source={{
            uri: data?.icon,
          }}
          style={[style.userAvatar]}
          alt="User"
        />

        <View style={{ marginLeft: 8 }}>
          <Text style={[styles.userName]}>{data?.label}</Text>
          <Text style={[styles.userLocation]}>
            {userType} {data?.userLocation} {data?.totalMembers}
          </Text>
        </View>
      </View>
    </>
  );
};

export default OrganizerDetailsCard;

const styles = StyleSheet.create({
  mainText: {
    color: App_Colors.Text_Black,
    fontSize: 14,
    fontFamily: "Halcom_Medium",
    fontWeight: "500",
    lineHeight: 16.8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginTop: 5,
  },
  userName: {
    color: App_Colors.Text_Black,
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
  },
  userLocation: {
    color: App_Colors.Neutral_Color,
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: "400",
    fontFamily: "Halcom_Regular",
    marginTop: 6,
  },
});
