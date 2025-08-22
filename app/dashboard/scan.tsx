import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, Alert, Pressable } from 'react-native';
import HeroBanner from 'components/hero-banner';
import MembershipCard from 'components/membership-card';
import SummaryChart from 'components/summary-chart';
import ConsultationCard from 'components/consultation-card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthService, logOut } from '../../src/api/services/authService';
import { UserService } from '../../src/api/services';
import { useRouter } from 'expo-router';
import { User, LogOut } from 'lucide-react-native';
import { Octicons, } from '@expo/vector-icons';

export default function ComingSoon() {
  const [userName, setUserName] = useState("User");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser?.email) {
          const userData = await UserService.getUserByEmail(currentUser.email);
          if (userData) {
            setUserName(userData.firstName || "User");
          }
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          try {
            await logOut();
            router.replace("/auth/sign-in");
          } catch (error) {
            Alert.alert("Error", "Failed to sign out. Please try again.");
          }
        },
      },
    ]);
    setShowProfileMenu(false);
  };

  const handleProfilePress = () => {
    setShowProfileMenu(false);
    Alert.alert("Profile", "Profile page coming soon!");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3 -mb-4">
        <Text className="text-3xl font-extrabold ml-2">
          <Text className="text-[#C43670]">Derm</Text>
          <Text className="text-[#f2838f]">AI</Text>
        </Text>
        <TouchableOpacity
          onPress={() => setShowProfileMenu(true)}
          className="p-2"
        >
          <User size={28} color="#C43670" />
        </TouchableOpacity>
      </View>

      {/* Profile Menu */}
      <Modal
        visible={showProfileMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProfileMenu(false)}
      >
        <TouchableOpacity
          className="flex-1"
          activeOpacity={1}
          onPress={() => setShowProfileMenu(false)}
        >
          <View className="flex-1 bg-black/50">
            <View className="absolute right-4 top-20 w-48 rounded-lg bg-white py-2 shadow-lg">
              <TouchableOpacity
                className="flex-row items-center px-4 py-3"
                onPress={handleProfilePress}
              >
                <User size={20} color="#555" />
                <Text className="ml-3 text-base text-gray-800">Profile</Text>
              </TouchableOpacity>

              <View className="mx-4 h-px bg-gray-200" />

              <TouchableOpacity
                className="flex-row items-center px-4 py-3"
                onPress={handleSignOut}
              >
                <LogOut size={20} color="#C43670" />
                <Text className="ml-3 text-base text-[#C43670]">Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Coming Soon Section */}
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mt-6 text-3xl font-bold text-gray-800 text-center">
          Coming Soon!
        </Text>
        <Text className="mt-2 text-base text-gray-500 text-center">
          We’re working hard to bring you this feature. Stay tuned!
        </Text>
      </View>

      {/* Footer */}
      <View className="bg-[#C43670] absolute bottom-0 left-0 right-0 flex-row justify-around ">
      <Pressable onPress={() => router.push("/dashboard/home")} className="items-center mt-4">
        <Octicons name="home" size={24} color="white" className="" />
        <Text className="text-white ">Home</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/dashboard/consultation")} className="items-center mt-4 ">
        <Octicons name="file" size={24} color="white" className="" />
        <Text className="text-white">Consult</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/dashboard/scan")}
        style={{
        width: 64,
        height: 64,
        borderWidth: 7,
        borderColor: "white",
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Octicons name="screen-full" size={32} color="white" />

      </Pressable>
      <Pressable onPress={() => router.push("/dashboard/notification")} className="items-center mt-4">
        <Octicons name="bell" size={24} color="white" />
        <Text className="text-white">History</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/dashboard/profile")} className="items-center mt-4">
        <Octicons name="person" size={24} color="white" />
        <Text className="text-white">Profile</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}
