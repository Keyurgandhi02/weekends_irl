import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgUri } from "react-native-svg";
import { App_Colors } from "../../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type GlobalInputProps = {
  label: string;
  labelVisible: boolean;
  isIconVisible: boolean;
  icon: string;
  placeholder: string;
  onInputChangeHandler: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
};

const GlobalInput: React.FC<GlobalInputProps> = ({
  label,
  labelVisible,
  isIconVisible,
  icon,
  placeholder,
  onInputChangeHandler,
  keyboardType,
}) => (
  <View style={[styles.container]}>
    {labelVisible && <Text style={[styles.heading]}>{label}</Text>}
    <View style={[styles.innercontainer]}>
      {isIconVisible && (
        <SvgUri style={[styles.icon]} width={22} height={22} uri={icon} />
      )}
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        onChangeText={onInputChangeHandler}
        keyboardType={keyboardType}
        selectionColor={App_Colors.Primary_Color_Base}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
  },
  heading: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: App_Colors.Text_Black,
    fontFamily: "Halcom_Medium",
    padding: 7,
  },
  innercontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 50,
    padding: 12,
    borderRadius: 12,
    borderColor: App_Colors.Neutral_Color_2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: wp("80%"),
    color: App_Colors.Neutral_Color_5,
    fontSize: 14,
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
  },
});

export default GlobalInput;
