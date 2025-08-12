import { Image, Text, View } from "react-native";

export default function Index() {
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
			<Image source={require("../assets/icons/outline/aligner.png")} />
		</View>
	);
}
