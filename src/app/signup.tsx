import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import InputComp from "@/components/input";
import ButtonComp from "@/components/button";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  const handleSignin = () => {
    Alert.alert("Succcess!!!");
  };

  const handleSigninNavigation = () => {
    router.push("/signin");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
        </View>
        <View style={styles.content}>
          <InputComp label="Full Name" placeholder="John" />
          <InputComp label="Email" placeholder="john@gmail.com" />
          <InputComp label="Phone Number" placeholder="+92123456789" />
          <InputComp label="Password" placeholder=" ******* " />
          <InputComp label="Confirm Password" placeholder=" ******* " />
          <View style={styles.inputMainContainer}>
            <View style={styles.inputContainer}>
              <ButtonComp
                onPress={handleSignin}
                btnText="Signup"
                containerColor="#00D09E"
                contentColor="black"
              />
              <Text
                onPress={() => handleSigninNavigation()}
                style={styles.miniText}
              >
                Already have an account? Signin
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  inputMainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    gap: 5,
    width: "80%",
  },
  miniText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
