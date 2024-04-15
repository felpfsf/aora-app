import { colors, icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

interface TabIconProps {
  color: string;
  focused: boolean;
  name: string;
  icon: ImageSourcePropType;
}
const TabIcon = ({ color, focused, icon, name }: TabIconProps) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        className='w-5 h-5'
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-psemibold " : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.secondary[100],
          tabBarInactiveTintColor: colors.gray[100],
          tabBarStyle: {
            backgroundColor: colors.primary,
            borderTopWidth: 1,
            borderTopColor: colors.black[200],
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.home}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.plus}
                name={"create"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.profile}
                name={"profile"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.bookmark}
                name={"Bookmark"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
