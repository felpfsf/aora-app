import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import { colors, images } from "@/constants";
import { useAuthStore } from "@/context/auth-store";
import { signOut } from "@/lib/appwrite";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { removeUser, user } = useAuthStore();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // call api again with latest data
    setRefreshing(false);
  };

  const mock = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const logout = async () => {
    await signOut();
    removeUser();
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, height: "100%" }}>
      <FlatList
        data={mock}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text className='text-white'>{item.id}</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <EmptyState
            title={"No videos found"}
            subtitle={"Be the first one to upload a video"}
          />
        )}
        ListHeaderComponent={() => (
          <View className='flex px-4 my-6 space-y-6'>
            <View className='flex flex-row items-start justify-between mb-6'>
              <View className='flex'>
                <Text className='text-sm text-gray-100 font-pmedium'>
                  Welcome back
                </Text>
                <Text className='text-2xl text-white font-psemibold'>
                  {user?.username}
                </Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  className='w-10 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput placeholder='Search for a video topic' />

            <View className='flex-1 w-full pt-5 pb-8'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Latest Videos
              </Text>

              <Trending posts={mock ?? []} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
