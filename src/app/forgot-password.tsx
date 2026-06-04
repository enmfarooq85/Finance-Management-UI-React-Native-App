import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import InputComp from "@/components/input";
import ButtonComp from "@/components/button";

export default function ForgotPasswordScreen() {
  const handleResetPasswordNavigation = () => {
    router.push("/reset-password");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>
      <View style={styles.content}>
        <InputComp label="Enter email address" placeholder="user@gmail.com" />
        <ButtonComp
          onPress={handleResetPasswordNavigation}
          btnText="Next"
          containerColor="#00D09E"
          contentColor="black"
        />
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
});
