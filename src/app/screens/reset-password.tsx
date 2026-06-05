import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Alert } from "react-native";
import InputComp from "@/components/input";
import ButtonComp from "@/components/button";

export default function ResetPasswordScreen() {
  const handleResetPassword = () => {
    Alert.alert("Success!!!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View style={styles.content}>
        <InputComp label="New Password" placeholder=" ******* " />
        <InputComp label="Confirm Password" placeholder=" ******* " />
        <ButtonComp
          onPress={handleResetPassword}
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
