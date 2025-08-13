import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView className="flex-1">
            <View className="flex min-h-screen flex-col p-6 bg-white">
                {/* Back button */}
                <TouchableOpacity onPress={() => router.back()} className="mb-8">
                    <ChevronLeft size={50} color="#555" />
                </TouchableOpacity>

                {/* Welcome text */}
                <View className="mb-8">
                    <Text className="text-3xl font-bold text-[#C43670]">Welcome,</Text>
                    <Text className="text-gray-500 text-lg">Sign in to continue!</Text>
                </View>

                {/* Form */}
                <View className="flex flex-col flex-grow">
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
                        <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center justify-center"
                        >
                        {showPassword ? <EyeOff size={20} color="#999" /> : <Eye size={20} color="#999" />}
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={() => router.push("/forgot-password")} className="self-end">
                        <Text className="mt-2 text-[#C43670] text-md underline">Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>

                    {/* Sign In Button */}
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
                            <Text className="text-white font-semibold">Sign In</Text>
                        </LinearGradient>
                    </Pressable>

                    <Text className="text-[#888] text-md text-center mt-2">
                    I&apos;m a new user.{" "}
                    <Text
                        className="text-[#C43670] underline"
                        onPress={() => router.push("/sign-up")}
                    >
                        Sign Up
                    </Text>
                    </Text>
                </View>

                {/* Footer */}
                <View className="items-center mt-8 mb-10">
                    <Text className="text-gray-500 text-md">DermAI 2025</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
