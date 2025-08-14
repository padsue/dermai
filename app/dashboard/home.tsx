import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "components/header"; 
import HeroBanner from "components/hero-banner";
import MembershipCard from "components/membership-card";
import SummaryChart from "components/summary-chart";
import ConsultationCard from "components/consultation-card";
import BottomNavigation from "components/bottom-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardPage() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header />

      {/* Main content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 96 }} // pb-24 equivalent
        className="p-4"
      >
        <HeroBanner />

        <Text className="text-xl font-bold text-[#C43670] mt-6">
          Good morning, User!
        </Text>

        <Text className="text-lg font-semibold text-dark-gray mt-6 mb-4">
          Membership & Health Plan
        </Text>
        <MembershipCard />

        <Text className="text-lg font-semibold text-dark-gray mt-6 mb-4">
          Summary
        </Text>
        <SummaryChart />

        <Text className="text-lg font-semibold text-dark-gray mt-6 mb-4">
          Booked Consultation
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pb-4"
        >
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

