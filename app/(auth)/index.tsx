import { LockSvg, UserSvg } from "@/assets/svgs/onboarding";
import Input from "@/components/Input";
import React from "react";
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const Login = () => {
  const colorScheme = useColorScheme();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View className="flex-1 bg-white dark:bg-black">
        <SafeAreaView className="flex-1 pt-14 items-center">
          <View className="mb-6">
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              Welcome
            </Text>
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              Back!
            </Text>
          </View>
          <View className="w-full" style={{ paddingInline: moderateScale(28) }}>
            <Input
              size="lg"
              placeholder="Username or Email"
              placeholderTextColor={
                colorScheme === "dark" ? "#F3F3F3" : "#676767"
              }
              style={{
                backgroundColor: colorScheme === "dark" ? "#333333" : "#F3F3F3",
                marginBottom: moderateScale(10),
              }}
              leftIcon={
                <UserSvg
                  fill={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
                />
              }
            />
            <Input
              size="lg"
              placeholder="Password"
              placeholderTextColor={
                colorScheme === "dark" ? "#F3F3F3" : "#676767"
              }
              leftIcon={
                <LockSvg
                  fill={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
                />
              }
              rightIcon={<View></View>}
              secureTextEntry={true}
              isPassword
              style={{
                backgroundColor: colorScheme === "dark" ? "#333333" : "#F3F3F3",
              }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              className="items-end w-full -m-2"
            >
              <Text className="text-[#4392F9] font-normal text-md">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            className="w-full"
            style={{
              paddingInline: moderateScale(28),
              marginTop: moderateScale(50),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              className="items-center w-full py-4 bg-[#4392F9] rounded-md"
            >
              <Text className="text-white font-semibold text-xl">Login</Text>
            </TouchableOpacity>
            <View
              className="flex-row items-center justify-between"
              style={{ marginTop: moderateScale(26) }}
            >
              <View className="w-2/5 h-px bg-black dark:bg-white"></View>
              <Text className="text-black font-bold text-sm dark:text-white">
                OR
              </Text>
              <View className="w-2/5 h-px bg-black dark:bg-white"></View>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              className="items-center w-full py-4 bg-[#D9D9D96B] rounded-md flex flex-row justify-center dark:bg-[#F3F3F3]"
              style={{ marginTop: moderateScale(26) }}
            >
              <View>
                <Image
                  source={require("@/assets/images/google.png")}
                  className="h-8 w-8"
                />
              </View>
              <Text className="text-black font-semibold text-xl ml-2">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
