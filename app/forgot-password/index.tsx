// app/forgot-password/page.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    return (
        <ScrollView
        className="flex-1 bg-white px-6"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        >
        {/* Back Button */}
        <View className="flex-row items-center mb-8">
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
            <ChevronLeft size={24} color="#4B4B4B" />
            </TouchableOpacity>
        </View>

        {/* Heading */}
        <View className="mb-8">
            <Text className="text-xl font-bold text-[#C43670]">Forgot Password</Text>
            <Text className="text-gray-500 text-[12px]">
            Enter your email address to reset your password
            </Text>
        </View>

        {/* Form */}
        <View className="flex-1">
            <View className="space-y-2 mb-6">
            <Text className="text-sm text-gray-800">Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#A3A3A3"
                keyboardType="email-address"
                autoCapitalize="none"
                className="h-11 rounded-lg border-2 border-[#C43670] px-3 text-sm text-gray-800"
            />
            </View>

            {/* Button */}
            <TouchableOpacity
            onPress={() => router.push("/dashboard")}
            className="w-full h-12 rounded-full bg-gradient-to-r from-[#C43670] to-[#f3cc97] items-center justify-center shadow-lg"
            style={{
                backgroundColor: "#C43670", // NativeWind doesn't handle gradient directly
            }}
            >
            <Text className="text-white font-semibold text-md">
                Send Reset Link
            </Text>
            </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center mt-8 mb-4">
            <Text className="text-gray-500 text-[10px]">DermAI 2025</Text>
        </View>
        </ScrollView>
    );
}
