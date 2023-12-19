import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/Home";
import { Provider } from "react-redux";
import store from "store";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import fonts from "config/fonts";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = async () => {
    await Font.loadAsync({
      "Roboto-Bold": require("./src/assets/fonts/Roboto_Bold.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto_Medium.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto_Regular.ttf"),
    });
  };

  const Stack = createNativeStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadAssets();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <PaperProvider theme={{ ...theme, fonts }}>
      <Provider store={store}>
        <RootSiblingParent>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </RootSiblingParent>
      </Provider>
    </PaperProvider>
  );
}
