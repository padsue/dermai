import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native';
import Header from 'components/header';
import HeroBanner from 'components/hero-banner';
import MembershipCard from 'components/membership-card';
import SummaryChart from 'components/summary-chart';
import ConsultationCard from 'components/consultation-card';
import BottomNavigation from 'components/bottom-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthService, logOut } from '../../src/api/services/authService';
import { UserService } from '../../src/api/services';
import { useRouter } from 'expo-router';
import { User, LogOut } from 'lucide-react-native';

export default function DashboardPage() {
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
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Custom Header with Profile Menu */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3">
        <Text className="text-xl font-bold text-[#C43670]">DermAI</Text>
        <TouchableOpacity onPress={() => setShowProfileMenu(true)} className="p-2">
          <User size={24} color="#C43670" />
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

      {/* Main content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 96 }} // pb-24 equivalent
        className="p-4">
        <HeroBanner />

        <Text className="mt-6 text-xl font-bold text-[#C43670]">Good morning, {userName}!</Text>

        <Text className="text-dark-gray mb-4 mt-6 text-lg font-semibold">
          Membership & Health Plan
        </Text>
        <MembershipCard />

        <Text className="text-dark-gray mb-4 mt-6 text-lg font-semibold">Summary</Text>
        <SummaryChart />

        <Text className="text-dark-gray mb-4 mt-6 text-lg font-semibold">Booked Consultation</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-4">
          <ConsultationCard title="General Practitioners" price="P 550" />
          <ConsultationCard title="Specialists" price="P 699" />
          <ConsultationCard title="Dermatologists" price="P 999" />
          {/* Add more cards as needed */}
        </ScrollView>
      </ScrollView>

      {/* Fixed bottom navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
}
