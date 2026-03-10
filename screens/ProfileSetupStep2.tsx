import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import CardSelection from "../components/CardSelection";
import { globalStyles } from "../utils/styles";
import { App_Colors } from "../constants/Colors";
import { userInterests } from "../utils/helper";
import GlobalButton from "../components/common/GlobalButton";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProfileSetupStep2 = () => {
  const navigation: any = useNavigation();
  const [selectedUserInterests, setSelectedUserInterests] = useState<number[]>(
    []
  );

  const handleUserTypeSelect = (id: number) => {
    if (!selectedUserInterests.includes(id)) {
      setSelectedUserInterests([...selectedUserInterests, id]);
    } else {
      const updatedValues = selectedUserInterests.filter((item) => item !== id);
      setSelectedUserInterests(updatedValues);
    }
  };

  const onNextScreenHandler = () => {
    navigation.navigate("ProfileSetupStep3");
  };

  const renderUserTypeCards = () => {
    const rows = [];
    for (let i = 0; i < userInterests.length; i += 4) {
      const row = userInterests.slice(i, i + 4);
      rows.push(
        <View key={i} style={styles.row}>
          {row.map((userInterest) => (
            <CardSelection
              image=""
              text={userInterest.name}
              key={userInterest.id}
              selectId={userInterest.id}
              isSelected={selectedUserInterests.includes(userInterest.id)}
              onSelect={handleUserTypeSelect}
              styles={{
                container: styles.cardContainer,
                selected: styles.selectedCard,
                textStyle: styles.textStyle,
                unSelectBorder: styles.unSelectBorder,
              }}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topHeadingContainer}>
          <Text style={styles.topHeadingText}>Interests</Text>
          <Text style={[styles.topSubHeadingText, { textAlign: "center" }]}>
            Choose interests to let people know what you care about.
          </Text>
        </View>

        <View>{renderUserTypeCards()}</View>

        <View style={styles.btnContainer}>
          <GlobalButton
            title="Next"
            onClickHandler={onNextScreenHandler}
            buttonContainer={{ height: 55, width: "100%" }}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    width: "100%",
    paddingHorizontal: RFValue(16),
  },
  topHeadingContainer: {
    alignItems: "center",
  },
  topHeadingText: {
    color: App_Colors.Black,
    fontSize: RFValue(20),
    fontWeight: "500",
    fontFamily: "Halcom_Bold",
    padding: RFValue(10),
  },
  topSubHeadingText: {
    color: App_Colors.Neutral_Color,
    fontSize: RFValue(14),
    fontWeight: "400",
    fontFamily: "Halcom_Medium",
  },
  cardContainer: {
    borderColor: App_Colors.Neutral_Color_2,
    padding: RFValue(10),
    margin: RFValue(4),
    alignItems: "center",
    borderRadius: RFValue(12),
    backgroundColor: App_Colors.White,
    borderWidth: 1,
  },
  selectedCard: {
    backgroundColor: App_Colors.Primary_Color_Bg,
  },
  unSelectBorder: {
    borderWidth: 0,
  },
  textStyle: {
    color: App_Colors.Primary_Color_Text,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFValue(10),
    width: wp("90%"),
  },
  btnContainer: {
    width: wp("90%"),
  },
});

export default ProfileSetupStep2;
