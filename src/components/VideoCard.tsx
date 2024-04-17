import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface VideoProps {
  title: string;
  thumbnail: string;
  video: string;
  users: {
    username: string;
    avatar: string;
  };
}

const VideoCard = ({ users, thumbnail, title, video }: VideoProps) => {
  const [play, setPlay] = useState(false);
  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex flex-row items-start w-full'>
        <View className='flex flex-row items-center justify-start flex-1 gap-3'>
          <View className='flex items-center justify-center w-12 h-12 border border-secondary p-0.5 rounded-lg'>
            <Image
              source={{ uri: users.avatar }}
              className='w-full h-full rounded-lg'
              resizeMode='cover'
            />
          </View>
          <View className='flex flex-col gap-y-1'>
            <Text className='text-sm text-white font-psemibold'>{title}</Text>
            <Text className='text-xs text-gray-100 font-pmedium'>
              {users.username}
            </Text>
          </View>
        </View>
        <View className='pt-2'>
          <Image source={icons.menu} className='w-6 h-6' resizeMode='contain' />
        </View>
      </View>
      {play ? (
        <View className='flex items-center justify-center w-full mt-3 h-60 rounded-xl'>
          <Text className='text-white'>Playing</Text>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          className='relative flex items-center justify-center w-full mt-3 h-60 rounded-xl'
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className='w-full h-full mt-3 rounded-xl'
            resizeMode='cover'
          />

          <Image
            source={icons.play}
            className='absolute w-10 h-10'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
