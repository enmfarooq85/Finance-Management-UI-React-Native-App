import ButtonComp from "@/components/button";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const handleSigninNavigation = () => {
    router.push("/signin");
  };

  const handleSignupNavigation = () => {
    router.push("/signup");
  };

  const handleForgotPasswordNavigation = () => {
    router.push("/forgot-password");
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            height={114}
            width={109}
          />
        </View>
        <View style={styles.headingAndDescriptionContainer}>
          <Text style={[styles.headingText, styles.text]}>FinWise</Text>
          <Text style={[styles.descriptionText, styles.text]}>
            Start your day with us.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <ButtonComp
            onPress={handleSigninNavigation}
            btnText="Sign In"
            containerColor="#00D09E"
            contentColor="black"
          />
          <ButtonComp
            onPress={handleSignupNavigation}
            btnText="Sign Up"
            containerColor="#DFF7E2"
            contentColor="black"
          />
        </View>
        <View>
          <Text
            onPress={handleForgotPasswordNavigation}
            style={[styles.forgotText, styles.text]}
          >
            Forgot Password?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#052224",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "ElmsSans-Regular",
    textAlign: "center",
    color: "white",
  },
  headingAndDescriptionContainer: {
    marginBottom: 40,
  },
  headingText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 20,
  },
  forgotText: {
    fontSize: 15,
  },
  btnContainer: {
    width: "80%",
    gap: 10,
    marginBottom: 10,
  },
});
