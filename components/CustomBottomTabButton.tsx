import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { App_Colors } from "../constants/Colors";

const CustomBottomTabButton = ({ opened, toggleOpened, navigation }: any) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HangoutCreate")}
            style={styles.addButton}
            activeOpacity={0.9}
          >
            <Animated.View
              style={[
                styles.addButtonInner,
                {
                  transform: [
                    {
                      rotate: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"],
                      }),
                    },
                  ],
                },
              ]}
            >
              <SvgUri
                width="68"
                height="68"
                uri="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Add%20Circle.svg?alt=media&token=f30574fa-7d41-4989-ac60-ebf1534aa8be"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  box: {
    position: "relative",
    width: 60,
    height: 60,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    shadowColor: App_Colors.Black,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: App_Colors.Primary_Color_Base,
    width: 68,
    height: 68,
    borderRadius: 50,
    shadowColor: App_Colors.Black,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: App_Colors.White,
  },
  item: {
    position: "absolute",
    top: 5,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: App_Colors.Primary_Color_Base,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default CustomBottomTabButton;
