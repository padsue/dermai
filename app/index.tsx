import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function LandingPage() {
    const router = useRouter();

    return (
        <View className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center">
        <View className="flex flex-col items-center justify-center flex-grow space-y-8">
            <Image
            source={require("../assets/logo.png")}
            className="w-32 h-32"
            resizeMode="contain"
            />
            <View className="space-y-2 items-center">
            <Text className="text-4xl font-bold text-[#C43670]">Derm</Text>
            <Text className="text-4xl font-bold text-[#f2838f]">AI</Text>
            <Text className="text-gray-500 text-sm">Smarter Skin Starts Here</Text>
            </View>
        </View>

        <View className="w-full max-w-sm space-y-4 mb-8">
            <Pressable onPress={() => router.push("/sign-up")}>
            <LinearGradient
                colors={["#f3cc97", "#C43670"]}
                className="w-full h-12 rounded-full flex items-center justify-center"
            >
                <Text className="text-white font-semibold">Let's get started</Text>
            </LinearGradient>
            </Pressable>

            <Pressable
            onPress={() => router.push("/sign-in")}
            className="w-full h-12 rounded-full bg-white flex items-center justify-center shadow"
            >
            <Text className="text-[#C43670] font-semibold">
                I already have an account
            </Text>
            </Pressable>
        </View>

        <Text className="text-[10px] text-gray-500 text-center">
            By continuing, you agree to DermAI's{" "}
            <Text className="text-pink-500 underline">Terms of Service</Text> and{" "}
            <Text className="text-pink-500 underline">Privacy Policy</Text>
        </Text>
        </View>
    );
}