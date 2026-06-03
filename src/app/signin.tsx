import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Alert } from "react-native";
import InputComp from "@/components/input";
import ButtonComp from "@/components/button";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  const handleSignin = () => {
    Alert.alert("Succcess!!!");
  };

  const handleSignupNavigation = () => {
    router.push("/signup");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.content}>
        <InputComp label="Email" placeholder="user@gmail.com" />
        <InputComp label="Password" placeholder=" ******* " />
        <View style={styles.inputMainContainer}>
          <View style={styles.inputContainer}>
            <ButtonComp
              onPress={handleSignin}
              btnText="Signin"
              containerColor="#00D09E"
              contentColor="black"
            />
            <Text style={styles.miniText}>User Fingerprint to access.</Text>
            <Text
              onPress={() => handleSignupNavigation()}
              style={styles.miniText}
            >
              Don't have an account? Signup
            </Text>
          </View>
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
