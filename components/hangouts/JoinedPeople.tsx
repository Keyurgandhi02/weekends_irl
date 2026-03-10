import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { App_Colors } from "../../constants/Colors";
import GlobalButton from "../common/GlobalButton";

const JoinedPeople = ({ onRequestHandler }: any) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftContainer]}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/profile_avatar.png?alt=media&token=dbb3b14c-17db-46f0-ab13-cbff52c7fafe",
          }}
          style={[styles.userAvatar]}
          alt="User Profile"
        />
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/profile_avatar.png?alt=media&token=dbb3b14c-17db-46f0-ab13-cbff52c7fafe",
          }}
          style={[styles.userAvatar, { left: -5, zIndex: 1 }]}
          alt="User Profile"
        />

        <View style={[styles.midContainer]}>
          <Text style={[styles.joinedText]}>3 people joined!</Text>
        </View>
      </View>

      <GlobalButton
        title="Ask To Join"
        onClickHandler={onRequestHandler}
        buttonContainer={{ height: 42, width: "40%" }}
        buttonText={{
          color: App_Colors.White,
          secondColor: App_Colors.Primary_Color_Base,
          fontSize: 16,
        }}
        isDisabled={false}
        secondaryButton={false}
        isIcon={false}
        icon=""
      />
    </View>
  );
};

export default JoinedPeople;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 74,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "center",
  },
  joinedText: {
    fontSize: 12,
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
    color: App_Colors.Text_Black,
  },
  userAvatar: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: App_Colors.White,
  },
});
