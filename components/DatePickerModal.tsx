import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { App_Colors } from "../constants/Colors";

type DatePickerModalProps = {
  mode: string;
  visible: boolean;
  startDate: string;
  startedDate: string;
  onDateChangeHandler: (date: string) => void;
  onTimeChangeHandler: (time: string) => void;
  onCloseHandler: () => void;
};

const DatePickerModal: React.FC<DatePickerModalProps> = ({
  mode,
  visible,
  startDate,
  startedDate,
  onDateChangeHandler,
  onCloseHandler,
  onTimeChangeHandler,
}) => {
  const commonOptions = {
    backgroundColor: App_Colors.Primary_Color_Hover,
    textHeaderColor: App_Colors.White,
    textDefaultColor: App_Colors.White,
    selectedTextColor: App_Colors.White,
    mainColor: App_Colors.Primary_Color_Text,
    textSecondaryColor: App_Colors.White,
    textFontSize: 16,
    textHeaderFontSize: 20,
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {mode === "calendar" && (
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              current={startedDate}
              onDateChange={(date: string) => onDateChangeHandler(date)}
              options={{ ...commonOptions }}
            />
          )}

          {mode === "time" && (
            <DatePicker
              mode="time"
              minuteInterval={10}
              onTimeChange={(time: string) => onTimeChangeHandler(time)}
              options={{ ...commonOptions }}
            />
          )}

          <TouchableOpacity onPress={onCloseHandler}>
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: App_Colors.Primary_Color_Hover,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DatePickerModal;
