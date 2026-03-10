import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../utils/styles";
import { AntDesign } from "@expo/vector-icons";
import HangoutDetailsItemButton from "../components/HangoutDetailsItemButton";
import { App_Colors } from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import ReadMore from "react-native-read-more-text";
import OrganizerDetailsCard from "../components/OrganizerDetailsCard";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalButton from "../components/common/GlobalButton";

const HangoutsDetails: React.FC = ({ navigation }: any) => {
  const renderTruncatedFooter = (handlePress: any) => {
    return (
      <Text style={[styles.showMoreLessText]} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = (handlePress: any) => {
    return (
      <Text style={[styles.showMoreLessText]} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  const handleTextReady = () => {
    // ...
  };

  // Join Handler
  const joinHandler = () => {};
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
                uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/good-friends-playing-tabletop-game.jpg?alt=media&token=37aa5869-2cd6-48bd-b862-5e11809ead28",
              }}
              style={[styles.bg_image]}
              alt="Hangouts Background"
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

            <TouchableOpacity style={[styles.like]} activeOpacity={0.9}>
              <Ionicons
                name="heart-circle"
                size={42}
                color={App_Colors.White}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.share]} activeOpacity={0.9}>
              <MaterialCommunityIcons
                name="share-circle"
                size={38}
                color={App_Colors.White}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.headingContainer]}>
            <Text style={[styles.headingText]} numberOfLines={3}>
              Come Join our founder meetups and learn how to start business?
            </Text>
          </View>

          <HangoutDetailsItemButton
            label="Tuesday, 23 Jan 2024"
            extraLabel="9:00 AM"
            isIcon={true}
            isExtraText={true}
            onDetailsHandler={() => {}}
            icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Calendar.svg?alt=media&token=3fa75899-e647-4e6c-a1cd-a5abd60c957b"
          />

          <HangoutDetailsItemButton
            label="Who will be there!"
            isIcon={true}
            extraLabel="30 Members joined"
            isExtraText={true}
            onDetailsHandler={() => {}}
            icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/User%20Circle.svg?alt=media&token=31430bf5-0c69-4672-b9a4-ff7c869065a1"
          />

          <HangoutDetailsItemButton
            label="Ironhill Bangalore"
            isIcon={true}
            extraLabel="Check on maps"
            isExtraText={true}
            onDetailsHandler={() => {}}
            icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Map%20Point.svg?alt=media&token=688d8658-e110-4cdb-bd83-08d79eeacf65"
          />

          <HangoutDetailsItemButton
            label="Need Help?"
            isIcon={true}
            extraLabel=""
            isExtraText={false}
            onDetailsHandler={() => {}}
            icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Call%20Chat%20Rounded.svg?alt=media&token=ade2998b-9a3f-483f-a427-e2eb5e66e715"
          />

          <Text style={[styles.descHeading]}>Hangout info</Text>
          <View style={[styles.readMoreContainer]}>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}
              onReady={handleTextReady}
            >
              <Text style={[styles.descriptionText]}>
                Hi there! We are organizing a Highly Specialized Event for
                Startups and Investors. If you are a Company/Startup founder,
                Investor, Tech guy, Startup-curious or are looking for a funding
                — join us at this event. All attendees will get access to our
                App, where they can see our attendees in 3 cities: NYC, LA and
                Toronto
              </Text>
            </ReadMore>
          </View>
          <View style={{ marginBottom: 10 }}>
            <OrganizerDetailsCard
              mainHeading=""
              data={{
                id: 1,
                label: "Jessica",
                userLocation: "Banglore, India",
                totalMembers: "",
                icon: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/profile_avatar.png?alt=media&token=dbb3b14c-17db-46f0-ab13-cbff52c7fafe",
              }}
              style={{
                mainContainer: styles.mainContainer,
                userAvatar: styles.userAvatar,
              }}
              userType="Organizer"
            />
          </View>
        </ScrollView>
        <View style={{ marginTop: 10 }}>
          <GlobalButton
            title="Ask to join"
            onClickHandler={joinHandler}
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

export default HangoutsDetails;

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: RFValue(12),
    flex: 1,
  },
  bg_image: {
    height: RFValue(290),
    resizeMode: "cover",
    borderRadius: 20,
  },
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: App_Colors.Neutral_Color_2,
    paddingTop: RFValue(16),
    paddingBottom: RFValue(16),
  },
  headingText: {
    color: App_Colors.Text_Black,
    fontSize: RFValue(16),
    fontFamily: "Halcom_Medium",
    fontWeight: "400",
    lineHeight: 28.2,
  },
  descHeading: {
    color: App_Colors.Text_Black,
    fontSize: RFValue(15),
    fontFamily: "Halcom_Medium",
    lineHeight: 22.2,
    marginTop: 30,
  },
  descriptionText: {
    color: App_Colors.Neutral_Color,
    fontSize: RFValue(12),
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
  },
  readMoreContainer: {
    marginBottom: 6,
    marginTop: 10,
  },
  showMoreLessText: {
    marginTop: 16,
    color: App_Colors.Primary_Color_Base,
    fontSize: RFValue(11),
    lineHeight: 16.8,
    fontFamily: "Halcom_Regular",
    paddingTop: 4,
  },
  back: {
    margin: 15,
    position: "absolute",
    top: 10,
    left: 0,
    width: 34,
    height: 34,
  },
  like: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 42,
    height: 42,
  },
  share: {
    position: "absolute",
    bottom: 20,
    right: 70,
    width: 38,
    height: 38,
  },
  mainContainer: {
    height: 74,
    backgroundColor: App_Colors.White,
    borderWidth: 1,
    borderColor: App_Colors.Neutral_Color_2,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
