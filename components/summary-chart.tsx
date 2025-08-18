import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function SummaryCard() {
  const data = [
    {
      name: "Photos uploaded",
      population: 7,
      color: "#C43670",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Diagnosed problems",
      population: 5,
      color: "#F283AF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Appointments done",
      population: 3,
      color: "#F3CC97",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  return (
    <View className="bg-[#FFF8F0] p-4 rounded-xl -mt-2 shadow-lg shadow-black">
      <View className="flex-row items-center">
        {/* Pie Chart */}
        <PieChart
          data={data}
          width={screenWidth * 0.35}
          height={140}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: () => "#000",
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"20"}
          hasLegend={false} // disable default legend


        />

        {/* Custom Legend */}
        <View className="flex-1 ">
          {data.map((item, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center mt-4">
                <View
                  className="h-2.5 w-2.5 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <Text className="text-sm text-gray-700">{item.name}</Text>
              </View>
              <Text className="font-semibold">{item.population}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}


