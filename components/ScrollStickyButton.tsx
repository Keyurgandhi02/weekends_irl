import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { App_Colors } from "../constants/Colors";
import IconSelectArrowDownBlue from "./IconFilterAll";
import ListItemButton from "./ScrollFilterListButton";

interface Props {
  activeFiltersCount?: number;
  onPress: () => void;
}

// Show Filters Count
const Counter: React.FC<{ count: number }> = ({ count }) => (
  <View style={[styles.counter]}>
    <Text style={[styles.counterText]}>{count}</Text>
  </View>
);

// Show Filter Icon
const Icon: React.FC = () => (
  <View style={[styles.icon]}>
    <IconSelectArrowDownBlue />
  </View>
);

const ScrollStickyButton: React.FC<Props> = ({
  activeFiltersCount,
  onPress,
}) => (
  <ListItemButton
    onPress={onPress}
    text="Filters"
    icon={
      activeFiltersCount ? <Counter count={activeFiltersCount} /> : <Icon />
    }
  />
);

export default ScrollStickyButton;

const styles = StyleSheet.create({
  counter: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginLeft: -4,
    marginRight: 7,
    borderRadius: 4,
  },
  counterText: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 13.2,
    fontFamily: "Halcom_Regular",
    color: App_Colors.Primary_Color_Base,
  },
  icon: {
    marginLeft: -6,
    marginRight: 5,
  },
});
