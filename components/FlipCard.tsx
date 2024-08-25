import React, { useState, useRef } from "react";
import {
	View,
	Text,
	Image,
	Pressable,
	Animated,
	StyleSheet,
} from "react-native";
import { styled } from "nativewind";

const FlipCard = ({
	cardFront,
	cardBack,
}: {
	cardFront: string;
	cardBack: string;
}) => {
	const [flipped, setFlipped] = useState(false);
	const animatedValue = useRef(new Animated.Value(0)).current;

	const flipToFront = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 600,
			useNativeDriver: true,
		}).start(() => setFlipped(false));
	};

	const flipToBack = () => {
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 600,
			useNativeDriver: true,
		}).start(() => setFlipped(true));
	};

	const interpolateFront = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "180deg"],
	});

	const interpolateBack = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["180deg", "360deg"],
	});

	return (
		<View className="flex items-center justify-center">
			<Pressable onPress={flipped ? flipToFront : flipToBack}>
				<View className="w-[90vw] min-h-[130px]  relative">
					<Animated.View
						className="absolute w-full h-full bg-[#6a5acd] items-center justify-center rounded-lg"
						style={[
							styles.flipCard,
							{ transform: [{ rotateY: interpolateFront }] },
						]}
					>
						<Text className="p-4 text-[#fff]">{cardFront}</Text>
					</Animated.View>
					<Animated.View
						className="absolute w-full h-full bg-[#8b0000] items-center justify-center rounded-lg"
						style={[
							styles.flipCard,
							{ transform: [{ rotateY: interpolateBack }] },
						]}
					>
						<Text className="p-4 text-[#fff]">{cardBack}</Text>
					</Animated.View>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	flipCard: {
		backfaceVisibility: "hidden",
	},
});

export default styled(FlipCard);
