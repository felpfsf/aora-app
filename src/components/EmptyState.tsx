import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

const EmptyState = ({ subtitle, title }: EmptyStateProps) => {
  return (
    <View className='items-center justify-center px-4'>
      <Image
        source={images.empty}
        style={{ width: 275, height: 215 }}
        resizeMode='contain'
      />
      <Text className='mt-2 text-2xl text-white font-psemibold'>{title}</Text>
      <Text className='text-sm text-gray-100 font-pmedium'>{subtitle}</Text>

      <CustomButton
        title='Create video'
        handlePress={() => router.push("/create")}
        containerStyles='w-full mt-5'
      />
    </View>
  );
};

export default EmptyState;
