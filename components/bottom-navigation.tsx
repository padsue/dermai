import React from "react";
import { View, Text } from "react-native";

export default function BottomNavigation() {
    return (
        <View className="bg-pink-300 p-4 shadow absolute bottom-0 left-0 right-0 flex-row justify-around">
        <Text className="text-[#C43670] font-semibold">Home</Text>
        <Text className="text-gray-500">Consult</Text>
        <Text className="text-gray-500">Scan</Text>
        <Text className="text-gray-500">History</Text>
        <Text className="text-gray-500">Profile</Text>
        </View>
    );
}
