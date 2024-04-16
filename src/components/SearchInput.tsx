import { colors, icons } from "@/constants";
import React from "react";
import {
  Image,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface SearchInputProps extends TextInputProps {
  value?: string;
  placeholder?: string;
  styles?: string;
  onChange?: (value: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}
const SearchInput = ({
  value,
  placeholder,
  styles,
  onChange,
}: SearchInputProps) => {
  return (
    <View
      className={`space-y-2 border-2 border-black-200 rounded-2xl focus:border-secondary bg-black-100 flex flex-row px-4 h-16 items-center ${styles}`}
    >
      <TextInput
        className='flex-1 text-base text-white font-pregular'
        placeholder={placeholder}
        placeholderTextColor={colors.gray[100]}
      />
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
