import { animatableConfig, icons } from "@/constants";
import { ResizeMode, Video } from "expo-av";
import React, { useState } from "react";
import { FlatList, ImageBackground, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

interface VideoProps {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  users: {
    username: string;
    avatar: string;
  };
}
interface Props {
  posts: VideoProps[];
}

const videoURLTest = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

const TrendingItem = ({
  activeItem,
  item,
}: {
  activeItem: any;
  item: VideoProps;
}) => {
  const [play, setPlay] = useState(false);
  const [status2, setStatus] = useState({});
  return (
    <Animatable.View
      className='mr-5'
      animation={
        activeItem === item.$id
          ? animatableConfig.zoomIn
          : animatableConfig.zoomOut
      }
      duration={500}
    >
      {play ? (
        <>
          <Video
            className='my-5 overflow-hidden shadow-lg w-52 h-72 rounded-3xl shadow-black/40'
            source={{ uri: videoURLTest }}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={true}
            onPlaybackStatusUpdate={(status) => {
              console.log("🚀 ~ status:", status2);
              setStatus(() => status);
            }}
          />
        </>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          className='relative flex items-center justify-center'
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className='my-5 overflow-hidden shadow-lg w-52 h-72 rounded-3xl shadow-black/40'
            resizeMode='cover'
          />

          <Animatable.Image
            source={icons.play}
            className='absolute w-12 h-12'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: Props) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const changeActiveItem = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      horizontal
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={changeActiveItem}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
    />
  );
};

export default Trending;
