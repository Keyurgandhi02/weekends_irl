import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CardSelection from "../components/CardSelection";
import { globalStyles } from "../utils/styles";
import { App_Colors } from "../constants/Colors";
import { userTypes } from "../utils/helper";
import GlobalButton from "../components/common/GlobalButton";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProfileSetupStep3 = () => {
  const navigation: any = useNavigation();
  const [selectedUserType, setSelectedUserType] = useState<number | null>(null);

  const handleUserTypeSelect = (id: number) => {
    setSelectedUserType(id === selectedUserType ? null : id);
  };

  const onNextScreenHandler = () => {
    // navigation.navigate("Root");
  };
  const renderUserTypeCards = () => {
    const rows = [];
    for (let i = 0; i < userTypes.length; i += 3) {
      const row = userTypes.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.row}>
          {row.map((userType) => (
            <CardSelection
              key={userType.id}
              selectId={userType.id}
              image={userType.image}
              isSelected={selectedUserType === userType.id}
              onSelect={handleUserTypeSelect}
              styles={{
                container: styles.cardContainer,
                img: styles.cardImage,
                selected: styles.selectedCard,
                shadow: undefined,
                textStyle: undefined,
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
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topHeadingContainer}>
          <Text style={styles.topHeadingText}>Profile Picture</Text>
          <Text style={[styles.topSubHeadingText, { textAlign: "center" }]}>
            Choose your personal sticker
          </Text>
        </View>

        <View>{renderUserTypeCards()}</View>

        <View style={styles.btnContainer}>
          <GlobalButton
            title="Done"
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
    alignItems: "center",
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
    padding: RFValue(15),
    margin: RFValue(10),
    alignItems: "center",
    borderRadius: RFValue(20),
    backgroundColor: App_Colors.White,
    borderWidth: 1,
    borderColor: App_Colors.Neutral_Color_2,
  },
  cardImage: {
    width: RFValue(48),
    height: RFValue(70),
    resizeMode: "cover",
  },
  selectedCard: {
    backgroundColor: App_Colors.Primary_Color_Bg,
    borderWidth: 0.45,
    borderColor: App_Colors.Primary_Color_Base,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    width: wp("90%"),
  },
});

export default ProfileSetupStep3;
