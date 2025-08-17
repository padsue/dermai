import React from "react";
import { View, Text, Image, Pressable,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingPage() {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center">
            <View className="flex flex-col items-center justify-center flex-grow space-y-8">
                <Image
                source={require("../assets/logo.png")}
                className="w-36 h-36"
                resizeMode="contain"
                />
                <View className="items-center">
                <Text className="text-4xl font-extrabold">
                    <Text className="text-[#C43670]">Derm</Text>
                    <Text className="text-[#f2838f]">AI</Text>
                </Text>
                <Text className="text-gray-500 text-md">Smarter Skin Starts Here</Text>
                </View>
            </View>

            <View className="w-full max-w-sm mb-40">
                <Pressable onPress={() => router.push("/auth/sign-up")}
                 className= "w-full h-12 flex items-center bg-[#C43670] justify-center shadow-lg shadow-black mb-4 rounded-lg">
                    <Text className="text-white font-semibold">Let's get started</Text>
                </Pressable>

                <Pressable
                onPress={() => router.push("/auth/sign-in")}
                className="w-full h-12 bg-white flex items-center justify-center shadow-lg shadow-black mb-10 rounded-lg"
                >
                <Text className="text-[#C43670] font-semibold">
                    I already have an account
                </Text>
                </Pressable>
            </View>

            </View>
        </SafeAreaView>
    );
}