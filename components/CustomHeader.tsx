import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { App_Colors } from "../constants/Colors";
import { SvgUri } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type CustomHeaderProps = {
  title: string;
  isBack: boolean;
  isSearch: boolean;
  isNotification: boolean;
  navigation: any;
};

function CustomHeader({
  title,
  isBack,
  isSearch,
  isNotification,
  navigation,
}: CustomHeaderProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.leftContainer]}>
        {isBack && (
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={22}
              color={App_Colors.Text_Black}
              style={{ marginRight: 16 }}
            />
          </TouchableWithoutFeedback>
        )}

        <Text style={styles.titleText}>{title}</Text>
      </View>

      {isSearch && (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Root")}>
          <SvgUri
            width="22"
            height="22"
            style={{ marginRight: 6 }}
            uri={`https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Magnifer.svg?alt=media&token=9f27750e-537b-4cb5-b600-63613a9671fe`}
          />
        </TouchableWithoutFeedback>
      )}
      {isNotification && (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Root")}>
          <SvgUri
            width="22"
            height="22"
            style={{ marginLeft: 6 }}
            uri={`https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Bell.svg?alt=media&token=f42116ef-2f84-412d-a0c2-c609492e2f94`}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    paddingHorizontal: 20,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  midContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 21,
    color: App_Colors.Primary_Color_Base,
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
  },
});
