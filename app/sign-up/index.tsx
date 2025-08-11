import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Eye, EyeOff, ChevronLeft } from "lucide-react-native";

export default function SignUpScreen() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <View className="flex-1 bg-white p-6">
        {/* Back Button */}
        <Pressable
        onPress={() => router.push("/")}
        className="flex items-start mb-8"
        >
            <ChevronLeft size={24} color="#4B5563" />
        </Pressable>

        {/* Header */}
        <View className="mb-8">
            <Text className="text-xl font-bold text-[#C43670]">Create Account,</Text>
            <Text className="text-gray-500 text-xs">Sign up to get started!</Text>
        </View>

        {/* Form */}
        <View className="flex-1 space-y-3">
            {/* First Name */}
            <View className="space-y-2">
            <Text className="text-gray-700 text-sm">First Name</Text>
            <TextInput
                placeholder="First Name"
                keyboardType="default"
                className="text-sm h-11 rounded-lg border-2 border-[#C43670] px-3 text-gray-700"
                placeholderTextColor="#9CA3AF"
            />
            </View>

            {/* Last Name */}
            <View className="space-y-2">
            <Text className="text-gray-700 text-sm">Last Name</Text>
            <TextInput
                placeholder="Last Name"
                keyboardType="default"
                className="text-sm h-11 rounded-lg border-2 border-[#C43670] px-3 text-gray-700"
                placeholderTextColor="#9CA3AF"
            />
            </View>

            {/* Email */}
            <View className="space-y-2">
            <Text className="text-gray-700 text-sm">Email</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                className="text-sm h-11 rounded-lg border-2 border-[#C43670] px-3 text-gray-700"
                placeholderTextColor="#9CA3AF"
            />
            </View>

            {/* Password */}
            <View className="space-y-2">
            <Text className="text-gray-700 text-sm">Password</Text>
            <View className="relative">
                <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                className="text-sm h-11 rounded-lg border-2 border-[#C43670] pr-10 px-3 text-gray-700"
                placeholderTextColor="#9CA3AF"
                />
                <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 justify-center"
                >
                {showPassword ? (
                    <EyeOff size={20} color="#9CA3AF" />
                ) : (
                    <Eye size={20} color="#9CA3AF" />
                )}
                </Pressable>
            </View>
            </View>

            {/* Confirm Password */}
            <View className="space-y-2">
            <Text className="text-gray-700 text-sm">Confirm Password</Text>
            <View className="relative">
                <TextInput
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                className="text-sm h-11 rounded-lg border-2 border-[#C43670] pr-10 px-3 text-gray-700"
                placeholderTextColor="#9CA3AF"
                />
                <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 justify-center"
                >
                {showConfirmPassword ? (
                    <EyeOff size={20} color="#9CA3AF" />
                ) : (
                    <Eye size={20} color="#9CA3AF" />
                )}
                </Pressable>
            </View>
            </View>

            {/* Sign Up Button */}
            <Pressable onPress={() => router.push("/dashboard")} className="mt-auto">
            <LinearGradient
                colors={["#C43670", "#f3cc97"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="w-full h-12 rounded-full flex items-center justify-center shadow-lg"
            >
                <Text className="text-white font-semibold text-base">Sign Up</Text>
            </LinearGradient>
            </Pressable>
        </View>

        {/* Footer */}
        <View className="mt-8 mb-4 items-center">
            <Text className="text-gray-500 text-[10px]">
            I'm already a member.{" "}
            <Text
                onPress={() => router.push("/sign-in")}
                className="text-[#C43670] underline"
            >
                Sign In
            </Text>
            </Text>
            <Text className="text-gray-400 text-[10px]">DermAI 2025</Text>
        </View>
        </View>
    );
}