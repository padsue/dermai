import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex min-h-screen flex-col p-6 bg-white">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ChevronLeft size={50} color="#555" />
        </TouchableOpacity>

        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-[#C43670]">Create Account,</Text>
          <Text className="text-gray-500 text-lg">Sign up to get started!</Text>
        </View>

        {/* Form */}
        <View className="flex flex-col space-y-10 flex-grow">
          {/* First Name */}
          <View className="space-y-2">
            <Text className="text-[#333] text-sm">First Name</Text>
            <TextInput
              placeholder="First Name"
              keyboardType="default"
              className="text-sm h-11 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Last Name */}
          <View className="space-y-2">
            <Text className="text-[#333] text-sm">Last Name</Text>
            <TextInput
              placeholder="Last Name"
              keyboardType="default"
              className="text-sm h-11 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Email */}
          <View className="space-y-2">
            <Text className="text-[#333] text-sm">Email</Text>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              className="text-sm h-11 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Sign Up Button */}
          <Pressable onPress={() => router.push("/dashboard")}>
            <LinearGradient
              colors={["#f3cc97", "#C43670"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              className="w-full h-12 rounded-full flex items-center justify-center mt-auto"
            >
              <Text className="text-white font-semibold">Sign Up</Text>
            </LinearGradient>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="items-center mt-8 mb-10">
          <Text className="text-[#888] text-md">
            I&apos;m already a member.{" "}
            <Text
              className="text-[#C43670] underline"
              onPress={() => router.push("/sign-in")}
            >
              Sign In
            </Text>
          </Text>
          <Text className="text-gray-500 text-md">DermAI 2025</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
