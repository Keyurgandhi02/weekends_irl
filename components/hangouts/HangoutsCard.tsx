import React from "react";
import { View, StyleSheet } from "react-native";
import UserDetails from "./UserDetails";
import { App_Colors } from "../../constants/Colors";
import JoinedPeople from "./JoinedPeople";
import HangoutsDetails from "./HangoutsDetails";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HangoutsCard = ({ item, backgroundColor, navigation }: any) => {
  const onRequestHandler = () => {};
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <UserDetails
        user={item.user_details}
        timeStamp={item.time_stamp}
        navigation={navigation}
      />
      <HangoutsDetails details={item.hangout_details} navigation={navigation} />
      <JoinedPeople onRequestHandler={onRequestHandler} />
    </View>
  );
};

export default HangoutsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("90%"),
    minHeight: hp("20%"),
    borderRadius: 16,
    borderWidth: 0.75,
    borderColor: App_Colors.Neutral_Color_2,
    marginVertical: hp("2%"),
  },
});
