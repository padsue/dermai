import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View className="flex min-h-screen flex-col p-6 bg-white">
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
            <ChevronLeft size={24} color="#555" />
        </TouchableOpacity>

        {/* Welcome text */}
        <View className="mb-8">
            <Text className="text-xl font-bold text-[#C43670]">Welcome,</Text>
            <Text className="text-gray-500 text-[12px]">Sign in to continue!</Text>
        </View>

        {/* Form */}
        <View className="flex flex-col space-y-6 flex-grow">
            {/* Email */}
            <View className="space-y-2">
            <Text className="text-[#333] text-sm">Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                className="text-sm h-11 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
                placeholderTextColor="#999"
            />
            </View>

            {/* Password */}
            <View className="space-y-2">
            <Text className="text-[#333] text-sm">Password</Text>
            <View className="relative">
                <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={!showPassword}
                className="text-sm h-11 px-3 pr-10 rounded-lg border-2 border-[#C43670] text-[#333]"
                placeholderTextColor="#999"
                />
                <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center"
                >
                {showPassword ? <EyeOff size={20} color="#999" /> : <Eye size={20} color="#999" />}
                </Pressable>
            </View>
            <TouchableOpacity onPress={() => router.push("/forgot-password")} className="self-end">
                <Text className="text-[#C43670] text-[12px] underline">Forgot Password?</Text>
            </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <Pressable
            onPress={() => router.push("/dashboard")}
            className="w-full h-12 rounded-full bg-gradient-to-r from-[#C43670] to-[#f3cc97] flex items-center justify-center mt-auto"
            >
            <Text className="text-white font-semibold">Sign In</Text>
            </Pressable>
        </View>

        {/* Footer */}
        <View className="text-center mt-8 mb-4">
            <Text className="text-[#888] text-[10px]">
            I&apos;m a new user.{" "}
            <Text
                className="text-[#C43670] underline"
                onPress={() => router.push("/sign-up")}
            >
                Sign Up
            </Text>
            </Text>
            <Text className="text-gray-500 text-[10px]">DermAI 2025</Text>
        </View>
        </View>
    );
}
