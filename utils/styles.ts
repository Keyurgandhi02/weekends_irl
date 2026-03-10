import { Platform, StatusBar } from "react-native";
import { App_Colors } from "../constants/Colors";

export const globalStyles: any = {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: App_Colors.White,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 30,
    height: 68,
    padding: 0,
    borderRadius: 22,
    backgroundColor: App_Colors.White,
    shadowColor: App_Colors.Black,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
};
