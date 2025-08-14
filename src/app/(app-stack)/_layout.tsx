import { Redirect, Stack } from "expo-router";

const AppStackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="take-a-break"
        options={{
          animation: "fade",
          animationDuration: 70,
        }}
      />
      <Stack.Screen
        name="custom-breaks"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AppStackLayout;
