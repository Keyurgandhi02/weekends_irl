import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { App_Colors } from "../constants/Colors";

interface Props {
  active?: boolean;
  onPress: () => void;
  text: string;
  icon?: React.ReactNode;
}

const ScrollFilterListButton: React.FC<Props> = ({
  active,
  onPress,
  text,
  icon,
}) => {
  const containerStyle: Array<any> = [styles.container];
  const textStyle: Array<any> = [styles.text];

  if (active) {
    containerStyle.push(styles.containerActive);
    textStyle.push(styles.textActive);
  }

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View style={[containerStyle]}>
        {icon && icon}
        <Text numberOfLines={1} ellipsizeMode="clip" style={textStyle}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollFilterListButton;

const styles = StyleSheet.create({
  button: {
    marginLeft: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: App_Colors.Primary_Color_Base,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 12,
  },
  containerActive: {
    backgroundColor: "#000",
  },
  text: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 13.2,
    fontFamily: "Halcom_Regular",
    color: App_Colors.Primary_Color_Base,
    ...(Platform.OS === "web" ? { textOverflow: "clip" } : {}),
  },
  textActive: {
    color: "#2252C7",
  },
});
