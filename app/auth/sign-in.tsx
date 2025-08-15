import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { signIn } from '../../src/api/services/authService';

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn(email, password);

      if (result.success) {
        router.push('/dashboard/home');
      } else {
        Alert.alert('Sign In Failed', result.error || 'An error occurred during sign in');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex min-h-screen flex-col bg-white p-6">
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ChevronLeft size={50} color="#555" />
        </TouchableOpacity>

        {/* Welcome text */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-[#C43670]">Welcome,</Text>
          <Text className="text-lg text-gray-500">Sign in to continue!</Text>
        </View>

        {/* Form */}
        <View className="flex flex-grow flex-col">
          {/* Email */}
          <View className="mb-4">
            <Text className="text-sm text-[#333]">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              className="h-12 rounded-lg border-2 border-[#C43670] px-3 text-sm text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Password */}
          <View className="mb-4">
            <Text className="text-sm text-[#333]">Password</Text>
            <View className="relative">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={!showPassword}
                className="h-12 rounded-lg border-2 border-[#C43670] px-3 pr-10 text-sm text-[#333]"
                placeholderTextColor="#999"
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center">
                {showPassword ? <EyeOff size={20} color="#999" /> : <Eye size={20} color="#999" />}
              </Pressable>
            </View>
            <TouchableOpacity
              onPress={() => router.push('/auth/forgot-password')}
              className="self-end">
              <Text className="text-md mt-2 text-[#C43670] underline">Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <Pressable onPress={handleSignIn} disabled={isLoading} className="mt-4">
            <LinearGradient
              colors={['#f3cc97', '#C43670']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={{
                width: '100%',
                height: 48,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                opacity: isLoading ? 0.7 : 1,
              }}>
              {isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text className="font-semibold text-white">Sign In</Text>
              )}
            </LinearGradient>
          </Pressable>

          <Text className="text-md mt-2 text-center text-[#888]">
            I&apos;m a new user.{' '}
            <Text className="text-[#C43670] underline" onPress={() => router.push('/auth/sign-up')}>
              Sign Up
            </Text>
          </Text>
        </View>

        {/* Footer */}
        <View className="mb-10 mt-8 items-center">
          <Text className="text-md text-gray-500">DermAI 2025</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
