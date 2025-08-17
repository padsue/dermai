import React from "react";
import { View, Text, Pressable } from "react-native";
import { Menu, Search, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export default function Header() {
    const navigation = useNavigation();
    const router = useRouter();

    return (
        <View className="flex-row items-center justify-between p-4 bg-white border-b border-gray-100">
        {/* Left Section */}
        <View className="flex-row items-center space-x-4">
            <Pressable
            onPress={() => router.push("auth/sign-in")}
            accessibilityLabel="Menu"
            >
            <Menu size={24} color="#4B5563" />
            </Pressable>

            <Pressable

            className="flex-row items-center"
            >
            <Text className="text-2xl font-extrabold text-[#C43670]"
            >
               Derm
            </Text>
            <Text className="text-2xl font-extrabold text-[#f2838f]">AI</Text>
            </Pressable>
        </View>

        {/* Right Section */}
        <View className="flex-row items-center space-x-4">
            <Pressable

            accessibilityLabel="Search"
            >
            <Search size={24} color="#4B5563" />
            </Pressable>
            <Pressable

            accessibilityLabel="User Profile"
            >
            <User size={24} color="#4B5563" />
            </Pressable>
        </View>
        </View>
    );
}