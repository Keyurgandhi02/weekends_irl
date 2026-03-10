import { Dimensions } from "react-native";

// Window height and width
export const MainWindowWidth = Dimensions.get("window").width;
export const MainWindowHeight = Dimensions.get("window").height;

// Screen height and width
export const MainScreenWidth = Dimensions.get("screen").width;
export const MainScreenHeight = Dimensions.get("screen").height;

export default {
  window: {
    MainWindowWidth,
    MainWindowHeight,
  },
  isSmallDevice: MainWindowWidth < 375,
};

export const buttonMainOpacity = 0.8;
