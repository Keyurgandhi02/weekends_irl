import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/navigation";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NoInternetConnection from "./components/NoInternetConnection";

const App = () => {
  // Network Status
  const isNetwork = useNetworkStatus();

  // Custom Fonts
  const [fontsLoaded] = useFonts({
    Halcom_Regular: require("./assets/fonts/Halcom-Regular-BF648a71453957a.otf"),
    Halcom_Bold: require("./assets/fonts/Halcom-Bold-BF648a714549635.otf"),
    Halcom_Medium: require("./assets/fonts/Halcom-Medium-BF648a714568789.otf"),
    Halcom_Extra_Bold: require("./assets/fonts/Halcom-ExtraBold-BF648a71454d82a.otf"),
    Halcom_Light: require("./assets/fonts/Halcom-Light-BF648a71454e889.otf"),
  });

  // Loading Custom Fonts while in splash screen
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      {!isNetwork && <NoInternetConnection />}
      {isNetwork && (
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      )}
    </>
  );
};

export default App;
