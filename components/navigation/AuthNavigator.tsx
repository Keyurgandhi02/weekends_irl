import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../../screens/Auth";
import OtpSetup from "../../screens/OtpSetup";
import OtpVerify from "../../screens/OtpVerify";
import ProfileSetupStep1 from "../../screens/ProfileSetupStep1";
import ProfileSetupStep2 from "../../screens/ProfileSetupStep2";
import ProfileSetupStep3 from "../../screens/ProfileSetupStep3";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OtpSetup"
        component={OtpSetup}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OtpVerify"
        component={OtpVerify}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ProfileSetupStep1"
        component={ProfileSetupStep1}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ProfileSetupStep2"
        component={ProfileSetupStep2}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ProfileSetupStep3"
        component={ProfileSetupStep3}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
