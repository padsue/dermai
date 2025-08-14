import React from "react";
import { View, Text } from "react-native";

export default function MembershipCard() {
    return (
        <View className="bg-white p-4 rounded-xl shadow">
        <Text className="text-base font-semibold">Premium Health Plan</Text>
        <Text className="text-gray-600 mt-1">Valid until Dec 31, 2025</Text>
        </View>
    );
}
