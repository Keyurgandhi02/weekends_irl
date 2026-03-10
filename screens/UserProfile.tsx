import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { globalStyles } from "../utils/styles";
import { AntDesign } from "@expo/vector-icons";
import { App_Colors } from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import ProfileCountsCard from "../components/ProfileCountsCard";
import GlobalButton from "../components/common/GlobalButton";
import CardSelection from "../components/CardSelection";
import { HANGOUTS_DATA, userInterests, userLookingFor } from "../utils/helper";
import UserProfileJoinedHangoutsList from "../components/UserProfileJoinedHangoutsList";

const UserProfile = ({ navigation }: any) => {
  const onSendRequestHandler = () => {};

  const renderUserTypeCards = (data: any, status: boolean) => {
    const rows = [];
    for (let i = 0; i < 4; i += 4) {
      const row = data.slice(i, i + 4);
      rows.push(
        <View key={i} style={styles.row}>
          {row.map((item: any) => (
            <CardSelection
              image=""
              text={item.name}
              key={item.id}
              selectId={item.id}
              isSelected={false}
              onSelect={() => {}}
              styles={{
                container: {
                  ...styles.cardContainer,
                  backgroundColor: status
                    ? App_Colors.Primary_Color_Bg
                    : App_Colors.White,
                  borderWidth: status ? 0 : 1,
                },
                selected: undefined,
                textStyle: styles.textStyle,
                unSelectBorder: undefined,
              }}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={[styles.topContainer]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
        >
          <View>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/man3.png?alt=media&token=a4c0ce55-a51e-4dd3-b850-f9ebfe23a90e",
              }}
              style={[styles.bg_image]}
              alt="User"
            />
            <TouchableOpacity
              style={[styles.back]}
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}
            >
              <AntDesign
                name="leftcircle"
                size={34}
                color={App_Colors.Primary_Color_Base}
              />
            </TouchableOpacity>

            <View style={[styles.nameContainer]}>
              <Text style={[styles.nameText]}>Keyur Gandhi</Text>
              <Text style={[styles.locationText]}>Pune, India</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 14 }}>
            <View style={[styles.countContainer]}>
              <ProfileCountsCard count={123} countHeading="Hangout Posted" />
              <ProfileCountsCard count={3} countHeading="Hagout Badges" />
              <ProfileCountsCard count={3} countHeading="Hagout Badges" />
            </View>

            <View style={[styles.countContainer]}>
              <GlobalButton
                title="Send Request"
                onClickHandler={onSendRequestHandler}
                buttonContainer={{ height: 42, width: "48%" }}
                buttonText={{
                  color: App_Colors.White,
                  secondColor: App_Colors.Primary_Color_Base,
                  fontSize: 16,
                }}
                isDisabled={false}
                secondaryButton={true}
                isIcon={true}
                icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Forward.svg?alt=media&token=8b424b7b-2b07-4167-be0b-914e58e391d7"
              />
              <GlobalButton
                title="Message"
                onClickHandler={onSendRequestHandler}
                buttonContainer={{ height: 42, width: "48%" }}
                buttonText={{
                  color: App_Colors.White,
                  secondColor: App_Colors.Primary_Color_Base,
                  fontSize: 16,
                }}
                isDisabled={false}
                secondaryButton={false}
                isIcon={true}
                icon=""
              />
            </View>
            <View style={[styles.hBorder]} />
            <View style={{ marginTop: 20 }}>
              <Text style={[styles.cardLabel]}>Anshika is looking for:</Text>
              {renderUserTypeCards(userLookingFor, false)}
            </View>

            <View style={[styles.hBorder]} />
            <View style={{ marginTop: 20 }}>
              <Text style={[styles.cardLabel]}>Interests:</Text>
              {renderUserTypeCards(userInterests, true)}
            </View>
            <View style={[styles.hBorder]} />
            <View style={[styles.membersContainer]}>
              <Text style={[styles.membersHeading]}>Members</Text>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  console.log("click");
                }}
              >
                <Text style={[styles.membersButtonText]}>View All</Text>
              </TouchableOpacity>
            </View>
            <UserProfileJoinedHangoutsList data={HANGOUTS_DATA} />
          </View>
        </ScrollView>
        <View style={[styles.mainButtonContainer]}>
          <GlobalButton
            title="Invite To A Group "
            onClickHandler={onSendRequestHandler}
            buttonContainer={{ height: 52, width: "100%" }}
            buttonText={{
              color: App_Colors.White,
              secondColor: App_Colors.Primary_Color_Base,
              fontSize: 16,
            }}
            isDisabled={false}
            secondaryButton={true}
            isIcon={false}
            icon=""
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: "100%",
  },
  bg_image: {
    height: RFValue(290),
    resizeMode: "cover",
    backgroundColor: App_Colors.Image_BG_Color,
  },
  back: {
    margin: 15,
    position: "absolute",
    top: 10,
    left: 0,
    width: 34,
    height: 34,
  },
  nameContainer: {
    margin: 15,
    position: "absolute",
    bottom: 0,
    left: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
    color: App_Colors.Text_White,
    fontFamily: "Halcom_Medium",
  },
  locationText: {
    fontSize: 12,
    fontWeight: "400",
    color: App_Colors.Text_White,
    fontFamily: "Halcom_Regular",
    marginTop: 8,
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardContainer: {
    borderColor: App_Colors.Neutral_Color_2,
    padding: RFValue(10),
    alignItems: "center",
    borderRadius: RFValue(12),
  },
  textStyle: {
    color: App_Colors.Primary_Color_Text,
  },
  hBorder: {
    borderBottomColor: App_Colors.Neutral_Color_2,
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginTop: RFValue(10),
  },
  cardLabel: {
    fontFamily: "Halcom_Medium",
    fontSize: 16,
    fontWeight: "500",
    color: App_Colors.Text_Black,
    marginBottom: 12,
  },
  membersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  membersHeading: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Halcom_Medium",
    color: App_Colors.Text_Black,
  },
  membersButtonText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Halcom_Regular",
    color: App_Colors.Primary_Color_Text,
  },
  mainButtonContainer: {
    marginTop: 10,
    paddingHorizontal: RFValue(12),
  },
});
