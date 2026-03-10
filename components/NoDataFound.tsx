import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet, Text } from "react-native";
import { App_Colors } from "../constants/Colors";

function NoDataFound({ title }: any) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/sammy-line-man-turned-out-the-empty-pockets.png?alt=media&token=610aba52-87fc-479f-8931-61feaca61801",
          }}
          style={[styles.noDataImage]}
        />
        <Text style={[styles.noDataText]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

export default NoDataFound;

const styles = StyleSheet.create({
  noDataImage: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  noDataText: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 40,
    color: App_Colors.Neutral_Color_5,
    fontFamily: "Halcom_Medium",
  },
});
