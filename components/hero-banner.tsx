import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function HeroBanner() {
  return (
    <View className="relative w-full h-32 rounded-xl overflow-hidden shadow-lg shadow-black mt-2">
      <ImageBackground
        source={require("../assets/abstractbg.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="absolute inset-0 flex-row items-center justify-between p-4">
          {/* Left content */}
          <View className="flex-col space-y-0 max-w-[60%]">
            <Text className="text-[10px] font-light leading-none text-black">
              Access Online Consultations
            </Text>
            <Text className="text-[10px] font-bold leading-none text-black">
              from Licensed Dermatologists
            </Text>

            {/* Button replacement */}
            <TouchableOpacity className="w-fit mt-4 px-6 py-2 rounded-full bg-[#fbd9e5] shadow-lg shadow-black">
              <Text className="text-[8px] font-semibold text-black">
                Schedule Appointment
              </Text>
            </TouchableOpacity>
          </View>

          {/* Right image */}
          <Image
            source={require("../assets/human.png")} // update path
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
