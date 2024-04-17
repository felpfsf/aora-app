import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import VideoCard from "@/components/VideoCard";
import { colors, images } from "@/constants";
import { useAuthStore } from "@/context/auth-store";
import { getAllPosts, getLatestPosts, signOut } from "@/lib/appwrite";
import { useFetchAppwrite } from "@/lib/useFetchAppwrite";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface PostsProps {
  title: string;
}
const Home = () => {
  const { removeUser, user } = useAuthStore();
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: posts,
    isLoading: isLoadingLatests,
    refetch: refetchLatests,
  } = useFetchAppwrite(getAllPosts());
  const {
    data: latestPosts,
    isLoading,
    refetch,
  } = useFetchAppwrite(getLatestPosts());

  const onRefresh = async () => {
    setRefreshing(true);
    // call api again with latest data
    await refetch();
    setRefreshing(false);
  };

  const logout = async () => {
    await signOut();
    removeUser();
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, height: "100%" }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard {...item} />}
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

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
