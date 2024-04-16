import { useAuthStore } from "@/context/auth-store";
import "@/styles/global.css";

import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import React, { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const FONTS = {
  "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
};

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts(FONTS);
  const { user } = useAuthStore();
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    if (user && fontsLoaded) {
      router.replace("/home");
      setInitialCheck(true);
    }
  }, [initialCheck, fontsLoaded, user]);

  if (!fontsLoaded) return null;

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      {/* <Stack.Screen name='/search/[query]' options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
