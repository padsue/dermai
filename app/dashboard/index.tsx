import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ChevronLeft size={50} color="#555" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to homepage!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

