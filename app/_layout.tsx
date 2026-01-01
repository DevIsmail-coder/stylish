import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }
    if (colorScheme) {
      setTimeout(hideSplash, 1000);
      return;
    }
  }, []);
  return (
    <View className="dark flex-1">
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(splash)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
      <StatusBar barStyle="default" />
    </View>
  );
}
