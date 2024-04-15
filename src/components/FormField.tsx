import { colors, icons } from "@/constants";
import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: any;
  placeholder: string;
  styles?: string;
  onChange: (value: any) => void;
}
const FormField = ({
  title,
  value,
  placeholder,
  styles,
  onChange,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${styles}`}>
      <Text className='mb-2 text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='flex flex-row items-center w-full h-16 px-4 border-2 bg-black-100 rounded-2xl border-black-200 focus:border-secondary'>
        <TextInput
          className='flex-1 text-base text-white font-psemibold'
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
