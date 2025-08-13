import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="(app-stack)" options={{ headerShown: false }} />
			<Stack.Screen name="enable-notifications" />
		</Stack>
	);
}
