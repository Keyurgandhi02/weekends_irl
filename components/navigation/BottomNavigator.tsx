import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import routes from "../../constants/routes";
import BottomNavigationItem from "../BottomNavigationItem";
import CustomBottomTabButton from "../CustomBottomTabButton";
import { useTabMenu } from "../BottomTabContext";
import { globalStyles } from "../../utils/styles";
import Locations from "../../screens/Location";

const Tab: any = createBottomTabNavigator();

const BottomNavigator = ({ navigation }: any) => {
  const { opened, toggleOpened, visible } = useTabMenu();
  return (
    <Tab.Navigator
      initialRouteName={routes.HANGOUTS}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: visible ? "flex" : "none",
          ...globalStyles.tabBar,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name={routes.HANGOUTS}
        component={Locations}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <BottomNavigationItem
              focused={focused}
              routes={routes.HANGOUTS}
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/hangouts_inactive.svg?alt=media&token=f6ee485e-69c5-4ff5-be63-738ae9011a07"
              iconActive="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/hangouts.svg?alt=media&token=7ca0b788-37fb-43e4-8542-9d9552eecdbc"
            />
          ),
        }}
        listeners={{
          tabPress: (e: any) => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name={routes.STORIES}
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <BottomNavigationItem
              focused={focused}
              routes={routes.STORIES}
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/stories_inactive.svg?alt=media&token=8347dbfe-3fd2-4fc9-82a1-79f7d94614b6"
              iconActive="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Reel.svg?alt=media&token=71558855-c29f-47c8-8b11-8a51f505eb3f"
            />
          ),
        }}
        listeners={{
          tabPress: (e: any) => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name={routes.CREATE}
        component={Home}
        options={{
          tabBarButton: () => (
            <CustomBottomTabButton
              opened={opened}
              toggleOpened={toggleOpened}
              navigation={navigation}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CHAT}
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <BottomNavigationItem
              focused={focused}
              routes={routes.CHAT}
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Chat%20Round%20Dots.svg?alt=media&token=48d8ef71-2189-4f20-b861-411e83bee084"
              iconActive="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/message_active.svg?alt=media&token=e55f8f70-2b80-41e3-bc02-e011b25edfc4"
            />
          ),
        }}
        listeners={{
          tabPress: (e: any) => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <BottomNavigationItem
              focused={focused}
              routes={routes.PROFILE}
              icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/User%20Circle.svg?alt=media&token=31430bf5-0c69-4672-b9a4-ff7c869065a1"
              iconActive="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/User%20Circle.svg?alt=media&token=31430bf5-0c69-4672-b9a4-ff7c869065a1"
            />
          ),
        }}
        listeners={{
          tabPress: (e: any) => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
