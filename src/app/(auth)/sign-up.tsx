import { CustomButton, FormField } from "@/components";
import { colors, images } from "@/constants";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      setIsSubmiting(true);

      console.log("🚀 ~ submit ~ form.password:", form.password);
      console.log("🚀 ~ submit ~ form.email:", form.email);
      console.log("🚀 ~ submit ~ form.username:", form.username);

      const response = await createUser(
        form.username,
        form.email,
        form.password
      );

      if (!response) throw Error;
      // set it to store
      console.log("🚀 ~ submit ~ response:", response);
      
      router.replace("/home");
    } catch (error: unknown) {
      const err = error as Error;
      Alert.alert("Error", err.message);
    } finally {
      setIsSubmiting(false);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, height: "100%" }}>
      <ScrollView>
        <View
          className='flex justify-center w-full h-full px-4 my-6'
          style={{
            minHeight:
              Dimensions.get("window").height -
              Dimensions.get("window").height * 0.15,
          }}
        >
          <Image
            source={images.logo}
            className='w-[115px] h-[34px]'
            resizeMode='contain'
          />

          <Text className='mt-10 text-2xl font-semibold text-white font-psemibold'>
            Sign up
          </Text>

          <FormField
            title='Username'
            placeholder='Your unique username'
            styles='mt-7'
            value={form.username}
            onChange={(value) => setForm({ ...form, username: value })}
          />
          <FormField
            title='Email'
            placeholder='Enter your email'
            value={form.email}
            onChange={(value) => setForm({ ...form, email: value })}
            styles='mt-7'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            placeholder='Enter your password'
            value={form.password}
            onChange={(value) => setForm({ ...form, password: value })}
            styles='mt-7'
          />

          <CustomButton
            title='Sign up'
            containerStyles='mt-7'
            handlePress={submit}
            isLoading={isSubmiting}
          />

          <View className='flex items-center justify-center pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account?{" "}
              <Link
                href={"/sign-in"}
                className='text-secondary-100 font-psemibold'
              >
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
