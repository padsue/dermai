import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = [
  { name: "Photos uploaded", population: 5, color: "#C43670", legendFontColor: "#333", legendFontSize: 12 },
  { name: "Without problems", population: 5, color: "#f3cc97", legendFontColor: "#333", legendFontSize: 12 },
  { name: "Diagnosed problems", population: 5, color: "#f2838f", legendFontColor: "#333", legendFontSize: 12 },
];

export default function SummaryChart() {
  return (
    <View className="w-full rounded-xl shadow-md mt-6 bg-white flex-row items-center p-4">
      {/* Chart */}
      <PieChart
        data={data}
        width={screenWidth * 0.4}
        height={150}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: () => "#000",
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        absolute
      />

      {/* Legend */}
      <View className="flex-1 ml-4 space-y-2">
        {data.map((item, index) => (
          <View key={index} className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2">
              <View className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <Text className="text-sm text-gray-700">{item.name}</Text>
            </View>
            <Text className="font-semibold">{item.population}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
