import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { App_Colors } from "../../constants/Colors";
import { SvgUri } from "react-native-svg";

interface GlobalButtonProps {
  title: string;
  onClickHandler: () => void;
  buttonContainer: {
    height: number;
    width: string;
  };
  buttonText: {
    color: string;
    secondColor?: string;
    fontSize: number;
  };
  isDisabled: boolean;
  icon?: string;
  secondaryButton?: boolean;
  isIcon?: boolean;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  title,
  onClickHandler,
  buttonContainer: { height, width },
  buttonText: { color, secondColor, fontSize },
  isDisabled,
  icon,
  secondaryButton,
  isIcon,
}: any) => {
  const containerStyle = [
    styles.buttonContainer,
    isDisabled && { backgroundColor: App_Colors.Neutral_Color_3 },
    secondaryButton && styles.borderButtonContainer,
    { height, width },
  ];

  const textStyle = [
    styles.buttonText,
    { color: secondaryButton ? secondColor : color, fontSize: fontSize },
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onClickHandler}
      activeOpacity={0.8}
      disabled={isDisabled}
    >
      {isIcon && (
        <SvgUri width="26" height="26" uri={icon} style={styles.icon} />
      )}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: App_Colors.Primary_Color_Base,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Halcom_Regular",
    fontWeight: "500",
  },
  borderButtonContainer: {
    borderWidth: 1,
    borderColor: App_Colors.Primary_Color_Base,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: App_Colors.White,
  },
  icon: {
    marginRight: 10,
  },
});

export default GlobalButton;
