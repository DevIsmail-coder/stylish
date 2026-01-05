import { LockSvg, UserSvg } from "@/assets/svgs/onboarding";
import Input from "@/components/Input";
import { useState } from "react";
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

const Signup = () => {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View className="flex-1 bg-white dark:bg-black">
        <SafeAreaView
          className="flex-1 items-center"
          style={{ paddingTop: moderateScale(40) }}
        >
          <View className="mb-6">
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              Create an
            </Text>
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              account
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
              value={email}
              onChangeText={setEmail}
              leftIcon={
                <UserSvg
                  fill={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
                />
              }
            />
            <Input
              size="lg"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
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
                marginBottom: moderateScale(10),
              }}
            />
            <Input
              size="lg"
              placeholder="Confirm password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor={
                colorScheme === "dark" ? "#F3F3F3" : "#676767"
              }
              rightIcon={<View></View>}
              leftIcon={
                <LockSvg
                  fill={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
                />
              }
              secureTextEntry={true}
              isPassword
              style={{
                backgroundColor: colorScheme === "dark" ? "#333333" : "#F3F3F3",
              }}
            />
            <Text
              className="text-[#676767] text-md font-normal dark:text-[#F3F3F3]"
              style={{
                marginBottom: moderateScale(20),
                paddingRight: moderateScale(55),
              }}
            >
              By clicking the <Text className="text-[#4392F9]">Register</Text>{" "}
              button, you agree to the public offer
            </Text>
          </View>
          <View
            className="w-full"
            style={{
              paddingInline: moderateScale(28),
              marginTop: moderateScale(12),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              className="items-center w-full py-4 bg-[#4392F9] rounded-md"
            >
              <Text className="text-white font-semibold text-xl">
                Create Account
              </Text>
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

export default Signup;
