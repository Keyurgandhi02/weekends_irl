import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { globalStyles } from "../utils/styles";
import { RFValue } from "react-native-responsive-fontsize";
import CustomHeader from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GlobalInput from "../components/UI/GlobalInput";
import MultiInput from "../components/MultiInput";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePickerModal from "../components/DatePickerModal";
import DatePickerButton from "../components/DatePickerButton";
import CardSelection from "../components/CardSelection";
import { App_Colors } from "../constants/Colors";
import { hangoutsMode } from "../utils/helper";
import GlobalButton from "../components/common/GlobalButton";

const HangoutCreate = () => {
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState({
    mode: "",
    selectedDate: "",
    visible: false,
  });

  const [selectedUserType, setSelectedUserType] = useState<number | null>(null);

  const startDate = getFormatedDate(new Date(), "YYYY/MM/DD");
  const [startedDate, setStartedDate] = useState(startDate);

  const [startTime, setStartTime] = useState({
    isStartTimeVisible: false,
    selectedStartTime: "",
  });
  const [endTime, setEndTime] = useState({
    isEndTimeVisible: false,
    selectedEndTime: "",
  });

  const handleDatePicker = (mode: string) => {
    setDatePicker({ mode, selectedDate: startedDate, visible: true });
  };

  const handleDateChange = (date: string) => {
    setStartedDate(date);
    setDatePicker({ ...datePicker, visible: false });
  };

  const onInputChangeHandler = () => {};
  const onChangeTextHandler = () => {};

  const handleUserTypeSelect = (id: number) => {
    setSelectedUserType((prevId) => (prevId === id ? null : id));
  };

  const onSubmitHandler = () => {};
  const renderUserTypeCards = () => {
    const rows = [];
    for (let i = 0; i < hangoutsMode.length; i += 2) {
      const row = hangoutsMode.slice(i, i + 2);
      rows.push(
        <View key={i} style={styles.row}>
          {row.map((mode) => (
            <CardSelection
              key={mode?.id}
              selectId={mode?.id}
              image=""
              isSelected={selectedUserType === mode?.id}
              onSelect={handleUserTypeSelect}
              text={mode?.name}
              styles={{
                container: styles.cardContainer,
                img: undefined,
                selected: styles.selectedCard,
                shadow: undefined,
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
      <CustomHeader
        title="Create hangout"
        isBack={true}
        isSearch={false}
        isNotification={false}
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/good-friends-playing-tabletop-game.jpg?alt=media&token=37aa5869-2cd6-48bd-b862-5e11809ead28",
          }}
          style={styles.bg_image}
          alt="Hangouts Background"
        />

        <GlobalInput
          label="Heading"
          labelVisible={true}
          isIconVisible={false}
          icon=""
          placeholder="Enter Here!"
          onInputChangeHandler={onInputChangeHandler}
          keyboardType="default"
        />

        <MultiInput
          label="Description"
          isLabelVisible={true}
          placeholder="Enter Here!"
          numberOfLines={4}
          onChangeTextHandler={onChangeTextHandler}
        />
        <DatePickerButton
          heading="Date"
          value={startedDate}
          onPressHandler={() => handleDatePicker("calendar")}
          icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Calendar.svg?alt=media&token=2f10fe6a-14b0-4f22-994b-2d393744af85"
        />

        <View style={styles.timeContainer}>
          <View style={styles.partContainer}>
            <DatePickerButton
              heading="Start Time"
              value={startTime.selectedStartTime || "Start Time"}
              onPressHandler={() =>
                setStartTime({
                  isStartTimeVisible: true,
                  selectedStartTime: "",
                })
              }
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Clock%20Circle.svg?alt=media&token=1a174634-f39f-4b88-85ef-25e9c21514b7"
            />
          </View>
          <View style={styles.partContainer}>
            <DatePickerButton
              heading="End Time"
              value={endTime.selectedEndTime || "End Time"}
              onPressHandler={() =>
                setEndTime({
                  isEndTimeVisible: true,
                  selectedEndTime: "",
                })
              }
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Clock%20Circle.svg?alt=media&token=1a174634-f39f-4b88-85ef-25e9c21514b7"
            />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Hangout Type</Text>
          {renderUserTypeCards()}
        </View>
      </ScrollView>

      <DatePickerModal
        mode={datePicker.mode}
        visible={datePicker.visible}
        startDate={startDate}
        startedDate={startedDate}
        onDateChangeHandler={handleDateChange}
        onCloseHandler={() => setDatePicker({ ...datePicker, visible: false })}
        onTimeChangeHandler={() => {}}
      />

      <DatePickerModal
        mode="time"
        visible={startTime.isStartTimeVisible}
        startDate=""
        startedDate=""
        onDateChangeHandler={() => {}}
        onTimeChangeHandler={(time: any) =>
          setStartTime({
            isStartTimeVisible: false,
            selectedStartTime: time,
          })
        }
        onCloseHandler={() =>
          setStartTime({ ...startTime, isStartTimeVisible: false })
        }
      />

      <DatePickerModal
        mode="time"
        visible={endTime.isEndTimeVisible}
        startDate=""
        startedDate=""
        onDateChangeHandler={() => {}}
        onTimeChangeHandler={(time: any) =>
          setEndTime({
            isEndTimeVisible: false,
            selectedEndTime: time,
          })
        }
        onCloseHandler={() =>
          setEndTime({ ...endTime, isEndTimeVisible: false })
        }
      />

      <View style={{ marginTop: 10, width: "90%" }}>
        <GlobalButton
          title="Create Hangout"
          onClickHandler={onSubmitHandler}
          buttonContainer={{ height: 52, width: "100%" }}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg_image: {
    width: wp(90),
    height: hp(25),
    resizeMode: "cover",
    borderRadius: 20,
    marginTop: 12,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  partContainer: {
    width: "45%",
  },
  heading: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: App_Colors.Text_Black,
    fontFamily: "Halcom_Medium",
    paddingVertical: 7,
  },
  cardContainer: {
    padding: RFValue(10),
    marginTop: 12,
    marginBottom: 12,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: App_Colors.White,
    borderWidth: 1,
    borderColor: App_Colors.Neutral_Color_2,
    width: wp(40),
    height: 50,
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
    width: wp(90),
  },
  textStyle: {
    color: App_Colors.Primary_Color_Text,
    fontFamily: "Halcom_Regular",
    fontSize: RFValue(12),
    fontWeight: "400",
  },
});

export default HangoutCreate;
