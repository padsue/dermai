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
import { Check, ChevronLeft, Eye, EyeOff } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { signUp } from '../../src/api/services/authService';
import { UserService } from '../../src/api/services';

export default function SignUpScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!firstName.trim()) {
      Alert.alert('Error', 'Please enter your first name');
      return false;
    }
    if (!lastName.trim()) {
      Alert.alert('Error', 'Please enter your last name');
      return false;
    }
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return false;
    }
    if (!password) {
      Alert.alert('Error', 'Please enter a password');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
    if (!isChecked) {
      Alert.alert('Error', 'Please agree to the Terms of Service and Privacy Policy');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const result = await signUp(email, password);

      if (result.success && result.user) {
        // Create user document in Firestore
        try {
          await UserService.createUser({
            email: email,
            firstName: firstName,
            lastName: lastName,
            photoURL: '',
            userType: 'user',
          });

          Alert.alert('Success', 'Account created successfully!', [
            { text: 'OK', onPress: () => router.push('/dashboard/home') },
          ]);
        } catch (firestoreError) {
          console.error('Error creating user document:', firestoreError);
          Alert.alert('Success', 'Account created successfully!', [
            { text: 'OK', onPress: () => router.push('/dashboard/home') },
          ]);
        }
      } else {
        Alert.alert('Sign Up Failed', result.error || 'An error occurred during sign up');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View className="flex min-h-screen flex-col bg-white p-6">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ChevronLeft size={50} color="#555" />
        </TouchableOpacity>

        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-[#C43670]">Create Account,</Text>
          <Text className="text-lg text-gray-500">Sign up to get started!</Text>
        </View>

        {/* Form */}
        <View className="flex flex-grow flex-col">
          {/* First Name */}
          <View className="mb-4">
            <Text className="text-sm text-[#333]">First Name</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              keyboardType="default"
              className="h-12 rounded-lg border-2 border-[#C43670] px-3 text-sm text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

          {/* Last Name */}
          <View className="mb-4">
            <Text className="text-sm text-[#333]">Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              keyboardType="default"
              className="h-12 rounded-lg border-2 border-[#C43670] px-3 text-sm text-[#333]"
              placeholderTextColor="#999"
            />
          </View>

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
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3">
                {showPassword ? <EyeOff size={20} color="#555" /> : <Eye size={20} color="#555" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View className="">
            <Text className="text-sm text-[#333]">Confirm Password</Text>
            <View className="relative">
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                className="h-12 rounded-lg border-2 border-[#C43670] px-3 pr-10 text-sm text-[#333]"
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3">
                {showConfirmPassword ? (
                  <EyeOff size={20} color="#555" />
                ) : (
                  <Eye size={20} color="#555" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <Pressable onPress={handleSignUp} disabled={isLoading} className="mb-2 mt-10">
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
                <Text className="font-semibold text-white">Sign Up</Text>
              )}
            </LinearGradient>
          </Pressable>

          <Text className="text-md text-center text-[#888]">
            I&apos;m already a member.{' '}
            <Text className="text-[#C43670] underline" onPress={() => router.push('/auth/sign-in')}>
              Sign In
            </Text>
          </Text>
        </View>

        {/* Footer */}
        <View className="flex-row items-start justify-center">
          <Pressable
            onPress={() => setIsChecked(!isChecked)}
            className={`mr-2 mt-2 h-5 w-5 items-center justify-center rounded-md border-2 ${
              isChecked ? 'border-pink-500 bg-pink-500' : 'border-gray-400'
            }`}>
            {isChecked && <Check size={14} color="#fff" />}
          </Pressable>

          {/* Disclaimer text */}
          <Text className="mb-10 text-sm text-gray-500">
            By using DermAI, you agree to our {'\n'}
            <Text className="text-[#C43670] underline">Terms of Service</Text> and{' '}
            <Text className="text-[#C43670] underline">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
