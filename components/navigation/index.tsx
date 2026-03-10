import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthNavigator from "./AuthNavigator";
import StackNavigator from "./StackNavigator";
import { BottomTabContextProvider } from "../BottomTabContext";

export default function Navigation() {
  // const { token, authLoading } = useContext(AuthContext);
  const token = false;

  return (
    <SafeAreaProvider>
      <BottomTabContextProvider>
        <NavigationContainer>
          {token ? <StackNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </BottomTabContextProvider>
    </SafeAreaProvider>
  );
}
