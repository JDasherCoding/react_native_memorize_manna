import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import FlipCard from "@/components/FlipCard";

export default function HomeScreen() {
	const handlePress = () => {
		console.log("Button Pressed");
	};
	return (
		<SafeAreaView className="h-full bg-primary">
			<View className="m-4">
				{/* Header  */}
				<View className="mb-4">
					<Text className="text-4xl text-white font-semibold">
						Memorize Manna
					</Text>
					<Text className="text-xl text-white">
						Man shall not live by bread alone
					</Text>
				</View>

				{/* Scripture Cards  */}
				<View className="">
					<FlipCard
						cardFront="I have stored up your word in my heart, that I might not sin against you."
						cardBack="Psalm 119:11"
					/>

					<FlipCard
						cardFront="Psalm 119:11"
						cardBack="I have stored up your word in my heart, that I might not sin against you."
					/>

					<FlipCard
						cardFront="Psalm 119:11"
						cardBack="I have stored up your word in my heart, that I might not sin against you."
					/>
				</View>

				<CustomButton
					title="Get started"
					containerStyles="w-full mt-7"
					handlePress={handlePress}
				/>
			</View>
		</SafeAreaView>
	);
}
