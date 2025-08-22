import React, { useState, useEffect } from "react";
import { View, Modal, Pressable, Alert, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthService, logOut } from '../../src/api/services/authService';
import { UserService } from '../../src/api/services';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from 'expo-router';
import { User, LogOut } from 'lucide-react-native';

const categories = ["Cosmetic", "Pediatric", "Medical", "Dermapathology"];

const doctors = Array(6).fill({
  name: "Dr. Ella Zhang",
  specialty: "Acne Facial Specialist",
  price: "₱999",
  rating: 4.5,
  image: "assets/logo.jpg", // placeholder image
});

export default function ConsultationsScreen() {

  const [userName, setUserName] = useState('User');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser?.email) {
          const userData = await UserService.getUserByEmail(currentUser.email);
          if (userData) {
            setUserName(userData.firstName || 'User');
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  const handleSignOut = async () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          try {
            await logOut();
            router.replace('/auth/sign-in');
          } catch (error) {
            Alert.alert('Error', 'Failed to sign out. Please try again.');
          }
        },
      },
    ]);
    setShowProfileMenu(false);
  };

  const handleProfilePress = () => {
    setShowProfileMenu(false);
    // TODO: Navigate to profile page when created
    Alert.alert('Profile', 'Profile page coming soon!');
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header with Profile Menu */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3 -mb-4">
        <Text className="text-3xl font-extrabold ml-2">
          <Text className="text-[#C43670]">Derm</Text>
          <Text className="text-[#f2838f]">AI</Text>
        </Text>
        <TouchableOpacity onPress={() => setShowProfileMenu(true)} className="p-2">
          <User size={28} color="#C43670" />
        </TouchableOpacity>
      </View>

      {/* Profile Context Menu Modal */}
      <Modal
        visible={showProfileMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProfileMenu(false)}>
        <TouchableOpacity
          className="flex-1"
          activeOpacity={1}
          onPress={() => setShowProfileMenu(false)}>
          <View className="flex-1 bg-black/50">
            <View className="absolute right-4 top-20 w-48 rounded-lg bg-white py-2 shadow-lg">
              <TouchableOpacity
                className="flex-row items-center px-4 py-3"
                onPress={handleProfilePress}>
                <User size={20} color="#555" />
                <Text className="ml-3 text-base text-gray-800">Profile</Text>
              </TouchableOpacity>

              <View className="mx-4 h-px bg-gray-200" />

              <TouchableOpacity className="flex-row items-center px-4 py-3" onPress={handleSignOut}>
                <LogOut size={20} color="#C43670" />
                <Text className="ml-3 text-base text-[#C43670]">Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Categories */}
      <View className="flex-row px-4 mt-4">
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
            className="px-3 py-1 rounded-full border border-pink-400"
          >
            <Text className="text-xs font-poppins text-pink-600">{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Doctor Grid */}
      <FlatList
        data={doctors}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingVertical: 12 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl shadow-lg p-3 mb-4 w-[48%]">
            <Image
              source={ {image: require("assets/logo.png")}}
              className="w-16 h-16 rounded-full self-center"
            />
            <View className="mt-2">
              <Text className="text-sm font-poppinsBold">{item.name}</Text>
              <Text className="text-xs text-gray-500">{item.specialty}</Text>
              <Text className="text-sm text-pink-600 font-poppinsBold mt-1">
                {item.price}
              </Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-xs font-poppins mr-1">{item.rating}</Text>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome
                    key={i}
                    name={i < Math.floor(item.rating) ? "star" : "star-o"}
                    size={12}
                    color="#fbbf24"
                  />
                ))}
              </View>
              <Text className="absolute top-2 right-2 text-[10px] bg-pink-200 text-pink-600 px-2 py-0.5 rounded-full font-poppins">
                Available
              </Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Nav */}
        <View className="bg-pink-300 p-4 shadow absolute bottom-0 left-0 right-0 flex-row justify-around">
          <Pressable onPress={() => router.push("/dashboard/home")}>
            <Text className="text-gray-500">Home</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/dashboard/consultation")}>
            <Text className="text-[#C43670] font-semibold">Consult</Text>
          </Pressable>
          <Pressable>
            <Text className="text-gray-500">Scan</Text>
          </Pressable>
          <Pressable>
            <Text className="text-gray-500">History</Text>
          </Pressable>
          <Pressable>
            <Text className="text-gray-500">Profile</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}
