import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../src/api/config/firebase';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Reset Link Sent',
        'A password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password.',
        [{ text: 'OK', onPress: () => router.back() }]
      );
    } catch (error: any) {
      let errorMessage = 'An error occurred while sending the reset email';

      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many requests. Please try again later';
          break;
        default:
          errorMessage = error.message || errorMessage;
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 p-6">
      {/* Back Button */}
      <View className="mb-8 flex-row items-center ">
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ChevronLeft size={50} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-[#C43670]">Forgot Password</Text>
        <Text className="text-lg text-gray-500">
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
        <Pressable onPress={handlePasswordReset} disabled={isLoading} className="mt-4">
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
              <Text className="font-semibold text-white">Send reset link</Text>
            )}
          </LinearGradient>
        </Pressable>
      </View>

      {/* Footer */}
      <View className="mb-2 mt-8 items-center">
        <Text className="text-md text-gray-500">DermAI 2025</Text>
      </View>
    </SafeAreaView>
  );
}
