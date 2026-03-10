import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { App_Colors } from "../../constants/Colors";

const FilterListItem = ({ data, checkedColor }: any) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? checkedColor : undefined}
        />
        <Text style={styles.leftText}>{data?.filterName}</Text>
      </View>
      <Text style={styles.rightText}>{data?.filterCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 5,
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    borderRadius: 4,
  },
  leftText: {
    fontFamily: "Halcom_Regular",
    fontSize: 14,
    fontWeight: "400",
    color: App_Colors.Text_Black,
    lineHeight: 16.8,
  },
  rightText: {
    fontFamily: "Halcom_Regular",
    fontSize: 11,
    fontWeight: "400",
    color: App_Colors.Neutral_Color_5,
    lineHeight: 13.2,
  },
});

export default FilterListItem;
