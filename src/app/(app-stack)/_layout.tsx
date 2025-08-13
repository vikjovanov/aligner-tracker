import { Stack } from "expo-router";

const AppStackLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="take-a-break" />
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
