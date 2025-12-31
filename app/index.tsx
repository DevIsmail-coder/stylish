import {
  OnboardingOneSVG,
  OnboardingThreeSvg,
  OnboardingTwoSVG,
} from "@/assets/svgs/onboarding";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const index = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const OnboardingRef = useRef<Onboarding>(null);
  const insects = useSafeAreaInsets();
  const topValue = insects.top;
  const colorScheme = useColorScheme();

  const handleSlideNumber = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const navigateToLogin = () => {
    router.replace("/(auth)");
  };

  const RenderDoneButton = () => (
    <TouchableOpacity activeOpacity={0.5} onPress={navigateToLogin}>
      <Text className="text-[#4392F9] pr-6 font-medium text-xl">
        Get Started
      </Text>
    </TouchableOpacity>
  );

  const Circle = ({ selected }: { selected: boolean }) => (
    <View
      className={` rounded-full mx-1 ${
        selected ? "bg-[#17223B]/90 w-10 h-2" : "bg-[#E0E0E0] w-[10px] h-[10px]"
      }`}
    />
  );

  return (
    <View
      className="flex-1 bg-white dark:bg-black"
      style={{ paddingTop: topValue + moderateScale(20) }}
    >
      <View className="flex flex-row justify-between items-center px-[17px] ">
        <Text className="text-black dark:text-white font-semibold text-2xl">
          {currentPage + 1}
          <Text className="text-[#A0A0A1] font-semibold text-2xl">/3</Text>
        </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={navigateToLogin}>
          <Text className="text-black font-semibold text-2xl dark:text-white">
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <Onboarding
        pages={[
          {
            backgroundColor: colorScheme === "dark" ? "#000000" : "#FFFFFF",
            image: <OnboardingOneSVG />,
            title: "Choose Products",
            subtitle:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          },
          {
            backgroundColor: colorScheme === "dark" ? "#000000" : "#FFFFFF",
            image: <OnboardingTwoSVG />,
            title: "Make Payment",
            subtitle:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          },
          {
            backgroundColor: colorScheme === "dark" ? "#000000" : "#FFFFFF",
            image: <OnboardingThreeSvg />,
            title: "Get Your Order",
            subtitle:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          },
        ]}
        ref={OnboardingRef}
        bottomBarHighlight={false}
        skipLabel="Prev"
        pageIndexCallback={handleSlideNumber}
        NextButtonComponent={(props) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              OnboardingRef.current?.goNext();
            }}
          >
            <Text className="text-[#4392F9] pr-6 font-medium text-xl">
              {props.nextLabel}
            </Text>
          </TouchableOpacity>
        )}
        DoneButtonComponent={RenderDoneButton}
        SkipButtonComponent={(props) =>
          currentPage > 0 && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                OnboardingRef.current?.goToPage(currentPage - 1, true);
              }}
            >
              <Text className="text-[#C4C4C4]  pl-6 font-medium text-xl">
                {props.skipLabel}
              </Text>
            </TouchableOpacity>
          )
        }
        containerStyles={styles.container}
        imageContainerStyles={styles.imageContainer}
        DotComponent={Circle}
        titleStyles={{
          ...styles.title,
          color: colorScheme === "dark" ? "#FFFFFF" : "#000000",
        }}
        subTitleStyles={styles.subtitle}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: -110,
  },
  imageContainer: {
    paddingBottom: 0,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "800",
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: "#A8A8A9",
    fontWeight: "600",
    lineHeight: moderateScale(20),
    paddingHorizontal: moderateScale(15),
  },
});
