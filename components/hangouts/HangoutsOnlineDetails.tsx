import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { App_Colors } from "../../constants/Colors";

type onlineDetailsProps = {
  linkIcon: string;
  linkTitle: string;
  linkBtnText: string;
};

const HangoutsOnlineDetails = ({
  linkIcon,
  linkTitle,
  linkBtnText,
}: onlineDetailsProps) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.topContainer]}>
        <SvgUri width={14} height={12} uri={linkIcon} />
        <Text style={[styles.linkHeading]}>{linkTitle}</Text>
      </View>
      <View style={[styles.topContainer]}>
        <Text style={[styles.linkbtntext]}>{linkBtnText}</Text>
        <AntDesign
          name="right"
          size={14}
          color={App_Colors.Primary_Color_Base}
        />
      </View>
    </View>
  );
};

export default HangoutsOnlineDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  linkHeading: {
    fontSize: 11,
    fontFamily: "Halcom_Regular",
    color: App_Colors.Text_Black,
    fontWeight: "400",
    marginLeft: 4,
  },
  linkbtntext: {
    fontSize: 14,
    fontFamily: "Halcom_Regular",
    color: App_Colors.Primary_Color_Base,
    fontWeight: "400",
    marginRight: 5,
  },
});
