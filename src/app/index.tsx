import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const ONBOARDING1 = require("../../assets/images/onboarding-1.png");
const ONBOARDING2 = require("../../assets/images/onboarding-2.png");

export default function OnBoardingScreen() {
  const [isFirstOnBoarding, setIsFirstOnBoarding] = useState(true);
  const dots = [0, 1];

  const toggleOnBoarding = () => {
    setIsFirstOnBoarding((prev) => !prev);

    // LEETCODE: so false means always on the second onboarding
    if (!isFirstOnBoarding) {
      router.push("./screens/home");
    }
  };

  const titleText = isFirstOnBoarding
    ? "Welcome to Expense Manager"
    : "Are you ready to take control of your finance?";

  const imageSource = isFirstOnBoarding ? ONBOARDING1 : ONBOARDING2;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>{titleText}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <Pressable onPress={toggleOnBoarding}>
          <Text style={styles.nextButton}>Next</Text>
        </Pressable>
        <View style={styles.dotsContainer}>
          {dots.map((_, index) => {
            const isActive = index === (isFirstOnBoarding ? 0 : 1);

            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    backgroundColor: isActive ? "#00D09E" : "transparent",
                    borderWidth: 2,
                    borderColor: "#00D09E",
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#00D09E",
  },
  header: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  content: {
    flex: 1,
    backgroundColor: "#F1FFF3",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#c8e9cc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  image: {
    width: 287,
    height: 287,
    resizeMode: "contain",
  },
  nextButton: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
