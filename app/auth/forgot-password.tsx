import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="flex-1 p-6">
      {/* Back Button */}
      <View className="flex-row items-center mb-8 ">
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ChevronLeft size={50} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-[#C43670]">Forgot Password</Text>
        <Text className="text-gray-500 text-lg">
          Enter your email address to reset your password
        </Text>
      </View>

      {/* Form */}
      <View className="flex-1">
        <View className="mb-6">
          <Text className="text-sm text-gray-800">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#A3A3A3"
            keyboardType="email-address"
            autoCapitalize="none"
            className="h-12 rounded-lg border-2 border-[#C43670] px-3 text-sm text-gray-800"
          />
        </View>

        {/* Button */}
        <Pressable onPress={() => router.push("/dashboard")} className="mt-4">
          <LinearGradient
            colors={["#f3cc97", "#C43670"]}
              start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
              style={{
                width: "100%",
                height: 48,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
              >
              <Text className="text-white font-semibold">Send reset link</Text>
          </LinearGradient>
        </Pressable>
      </View>

      {/* Footer */}
      <View className="items-center mt-8 mb-2">
        <Text className="text-gray-500 text-md">DermAI 2025</Text>
      </View>
    </SafeAreaView>
  );
}
