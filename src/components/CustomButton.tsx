import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  textStyles?: string;
  containerStyles?: string;
  isLoading?: boolean;
  handlePress?: () => void;
}

const CustomButton = ({
  containerStyles,
  handlePress,
  isLoading = false,
  textStyles,
  title,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`bg-secondary rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${
        isLoading ? "opacity-70" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-lg text-primary font-psemibold ${textStyles}`}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={"#fff"}
          size={"small"}
          className='ml-2'
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
