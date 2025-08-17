import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

export default function MembershipCard() {
  return (
    <View className="w-full h-32 rounded-xl overflow-hidden shadow-lg shadow-black mt-6">
      <ImageBackground
        source={require("../assets/platinumbg.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1 justify-between p-4">
          {/* Top row */}
          <View className="flex-row justify-between items-start">
            <View className="flex-row items-center">
              <Text className="-mt-2 text-xl font-extrabold text-[#C43670]">
                Derm
              </Text>
              <Text className="-mt-2 text-xl font-extrabold text-[#f2838f]">
                AI
              </Text>
            </View>
            <Text className="-mt-2 text-lg font-bold text-black">
              Platinum
            </Text>
          </View>

          {/* Bottom row */}
          <View className="flex-row justify-between items-end mt-5">
            <View className="font-semibold">
              <Text className="text-[10px] text-black ">
                username@gmail.com
              </Text>
              <Text className="text-[10px] text-black">08/25</Text>
            </View>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
