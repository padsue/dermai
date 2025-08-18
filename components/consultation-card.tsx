import React from "react";
import { View, Text } from "react-native";

export default function ConsultationCard({ title, price }: { title: string; price: string }) {
    return (
        <View className="bg-white p-4 rounded-xl shadow-lg shadow-black mr-4 w-48">
        <Text className="text-base font-semibold">{title}</Text>
        <Text className="text-pink-600 mt-1 font-bold">{price}</Text>
        </View>
    );
}
