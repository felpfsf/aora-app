import { CustomButton } from "@/components";
import { colors, images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='items-center justify-center w-full min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] h-[300px] w-full'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless {"\n"} Possiblities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm text-center text-gray-100 font-pregular mt-7 max-w-[325px] w-full'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            containerStyles='w-full mt-7'
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
