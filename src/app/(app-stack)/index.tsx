import { useRouter } from "expo-router";
import { Button, Image, Text, View } from "react-native";

const TrackerScreen = () => {
	const router = useRouter();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontFamily: "Digitalt",
					fontSize: 32,
					textAlign: "center",
					fontWeight: "black",
				}}
			>
				Edit app/index.tsx to edit this screen.
			</Text>
			<Button
				title="Take a break"
				onPress={() => router.navigate("/take-a-break")}
			/>

			<Button
				title="Custom Breaks"
				onPress={() => router.navigate("/custom-breaks")}
			/>

			<Button
				title="Enable notifications"
				onPress={() => router.navigate("/enable-notifications")}
			/>

			{/* <Button
				title="Take a break"
				onPress={() => router.navigate("/take-a-break")}
			/> */}
			<Image source={require("@/assets/icons/outline/aligner.png")} />
		</View>
	);
};

export default TrackerScreen;
