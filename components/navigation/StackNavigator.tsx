import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HangoutCreate from "../../screens/HangoutCreate";
import HangoutsDetails from "../../screens/HangoutsDetails";
import Locations from "../../screens/Location";
import UserProfile from "../../screens/UserProfile";
import CustomHeader from "../CustomHeader";
import BottomNavigator from "./BottomNavigator";

const MainStack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === "HomeApp" ? false : true,
        header: (props) => <CustomHeader {...props} />,
      })}
      initialRouteName={"Root"}
    >
      <MainStack.Screen
        name="Root"
        component={BottomNavigator}
        options={{ headerTitle: "", headerShown: false }}
      />

      <MainStack.Screen
        name="HangoutDetails"
        component={HangoutsDetails}
        options={{ headerTitle: "", headerShown: false }}
      />

      <MainStack.Screen
        name="HangoutCreate"
        component={HangoutCreate}
        options={{ headerTitle: "", headerShown: false }}
      />

      <MainStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerTitle: "", headerShown: false }}
      />

      <MainStack.Screen
        name="Location"
        component={Locations}
        options={{ headerTitle: "", headerShown: false }}
      />
    </MainStack.Navigator>
  );
}
