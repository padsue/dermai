import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Check, ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen() {
      const router = useRouter();
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [isChecked, setIsChecked] = useState(false);

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
        <View className="flex flex-col flex-grow">
          {/* First Name */}
          <View className="mb-4">
            <Text className="text-[#333] text-sm">First Name</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              keyboardType="default"
              className="text-sm h-12 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Last Name */}
          <View className="mb-4">
            <Text className="text-[#333] text-sm">Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              keyboardType="default"
              className="text-sm h-12 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Email */}
          <View className="mb-4">
            <Text className="text-[#333] text-sm">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              className="text-sm h-12 px-3 rounded-lg border-2 border-[#C43670] text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Password */}
          <View className="mb-4">
            <Text className="text-[#333] text-sm">Password</Text>
            <View className="relative">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={!showPassword}
                className="text-sm h-12 px-3 pr-10 rounded-lg border-2 border-[#C43670] text-[#333]"
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <EyeOff size={20} color="#555" /> : <Eye size={20} color="#555" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View className="">
            <Text className="text-[#333] text-sm">Confirm Password</Text>
            <View className="relative">
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                className="text-sm h-12 px-3 pr-10 rounded-lg border-2 border-[#C43670] text-[#333]"
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3"
              >
                {showConfirmPassword ? <EyeOff size={20} color="#555" /> : <Eye size={20} color="#555" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <Pressable onPress={() => router.push("/dashboard")} className="mt-10 mb-2">
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
              <Text className="text-white font-semibold">Sign Up</Text>
            </LinearGradient>
          </Pressable>

          <Text className="text-[#888] text-md text-center">
            I&apos;m already a member.{" "}
            <Text
              className="text-[#C43670] underline"
              onPress={() => router.push("/sign-in")}
              >
              Sign In
            </Text>
          </Text>
        </View>

        {/* Footer */}
        <View className="flex-row items-start justify-center">

            <Pressable
            onPress={() => setIsChecked(!isChecked)}
            className={`w-5 h-5 border-2 rounded-md items-center justify-center mt-2 mr-2 ${
              isChecked ? "bg-pink-500 border-pink-500" : "border-gray-400"
            }`}
              >
              {isChecked && <Check size={14} color="#fff" />}
            </Pressable>

          {/* Disclaimer text */}
          <Text className="text-sm text-gray-500 mb-10">
            By using DermAI, you agree to our {"\n"}
            <Text className="text-pink-500 underline">Terms of Service</Text> and{" "}
            <Text className="text-pink-500 underline">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

