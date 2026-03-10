import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { App_Colors } from "../constants/Colors";

type NavigationItemProps = {
  routes: string;
  focused: boolean;
  icon: string;
  iconActive: string;
};

const BottomNavigationItem = ({
  routes,
  focused,
  icon,
  iconActive,
}: NavigationItemProps) => {
  let tabBarColor = focused
    ? App_Colors.Primary_Color_Base
    : App_Colors.Neutral_Color;

  return (
    <View style={styles.tabIconContainer}>
      <SvgUri
        width={22}
        height={22}
        uri={focused ? iconActive : icon}
        fill={tabBarColor}
      />
      <Text
        style={[
          styles.text,
          {
            color: tabBarColor,
          },
        ]}
      >
        {routes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 3,
    fontFamily: "Halcom_Bold",
    fontSize: 12,
  },
});

export default BottomNavigationItem;
