import createIconSetFromFontello from "@expo/vector-icons/createIconSetFromFontello";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import fontelloConfig from "@/assets/icons/utilities/config.json";
import { useEffect } from "react";
import i18nextConfig from "../translations/i18nextConfig";

export const UtiliesIcon = createIconSetFromFontello(
  fontelloConfig,
  "fontello",
  "fontello.ttf",
);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    fontello: require("@/assets/icons/utilities/fontello.ttf"),
  });

  const init = async () => {
    i18nextConfig.initalizeI18Next();
  };

  useEffect(() => {
    init();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(app-stack)" options={{ headerShown: false }} />
      <Stack.Screen name="enable-notifications" />
    </Stack>
  );
}
