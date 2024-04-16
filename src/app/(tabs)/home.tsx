import { icons } from "@/constants";
import { useAuthStore } from "@/context/auth-store";
import { signOut } from "@/lib/appwrite";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const { removeUser } = useAuthStore();

  const logout = async () => {
    await signOut();
    removeUser();
    router.replace("/sign-in");
  };

  return (
    <>
      <View className='items-center justify-center flex-1 bg-primary'>
        <Text className='text-4xl font-semibold text-neutral-200'>Home</Text>
        <TouchableOpacity onPress={logout}>
          <Image source={icons.logout} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
