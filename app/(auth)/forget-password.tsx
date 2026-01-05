import { EmailSvg } from "@/assets/svgs/onboarding";
import Input from "@/components/Input";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { useState } from "react";
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const forgetPassword = () => {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState("");
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View className="flex-1 bg-white dark:bg-black">
        <SafeAreaView className="flex-1 pt-10 items-center">
          <View className="mb-8">
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              Forgot
            </Text>
            <Text className="text-5xl/[43px] font-bold text-center dark:text-white">
              password?
            </Text>
          </View>
          <View className="w-full" style={{ paddingInline: moderateScale(28) }}>
            <Input
              size="lg"
              placeholder="Enter your email address"
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
                <EmailSvg
                  fill={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
                />
              }
            />
          </View>
          <View
            className="w-full"
            style={{
              paddingInline: moderateScale(28),
            }}
          >
            <Text
              className="text-[#676767] text-md font-normal dark:text-[#F3F3F3]"
              style={{ marginBottom: moderateScale(20) }}
            >
              <Text className="text-red-500">*</Text> We will send you a message
              to set or reset your new password
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              className="items-center w-full py-4 bg-[#4392F9] rounded-md"
            >
              <Text className="text-white font-semibold text-xl">Submit</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default forgetPassword;
