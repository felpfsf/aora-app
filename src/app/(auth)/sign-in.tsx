import { CustomButton, FormField } from "@/components";
import { colors, images } from "@/constants";
import { useAuthStore } from "@/context/auth-store";
import { signIn } from "@/lib/appwrite";
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

const SignIn = () => {
  const authStore = useAuthStore();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const submit = async () => {
    try {
      setIsSubmiting(true);
      if (!form) {
        Alert.alert("Please fill all fields");
      }

      const response = await signIn(form.email, form.password);

      // set it to store
      console.log("🚀 ~ submit ~ response:", JSON.stringify(response));
      authStore.setUser(response);

      router.replace("/home");
    } catch (error) {
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
            Sign in
          </Text>

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
            title='Log In'
            containerStyles='mt-7'
            handlePress={submit}
            isLoading={isSubmiting}
          />

          <View className='flex items-center justify-center pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don’t have an account?{" "}
              <Link
                href={"/sign-up"}
                className='text-secondary-100 font-psemibold'
              >
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
