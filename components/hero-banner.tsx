import React from "react";
import { View, Text } from "react-native";

export default function HeroBanner() {
    return (
        <View className="bg-gradient-to-r from-[#C43670] to-[#f3cc97] p-6 rounded-2xl shadow">
        <Text className="text-white text-lg font-semibold">
            Welcome to DermAI
        </Text>
        <Text className="text-white text-sm mt-1">
            Your skin health partner, anytime, anywhere.
        </Text>
        </View>
    );
    }
