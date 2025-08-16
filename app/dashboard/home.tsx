import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from 'components/header';
import HeroBanner from 'components/hero-banner';
import MembershipCard from 'components/membership-card';
import SummaryChart from 'components/summary-chart';
import ConsultationCard from 'components/consultation-card';
import BottomNavigation from 'components/bottom-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthService } from '../../src/api/services/authService';
import { UserService } from '../../src/api/services';

export default function DashboardPage() {
  const [userName, setUserName] = useState('User');

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
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header />

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
