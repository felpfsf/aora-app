import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='items-center justify-center flex-1 bg-primary'>
      <Text className='text-4xl font-semibold text-neutral-200 font-pblack'>
        Aora App
      </Text>
      <StatusBar style='auto' />
      <Link
        href={"/profile"}
        className='text-xl font-semibold text-indigo-500 underline underline-offset-8'
      >
        Go to Profile
      </Link>
    </View>
  );
}
