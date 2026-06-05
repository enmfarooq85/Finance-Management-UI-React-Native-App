import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonComp from "@/components/button";
import { router } from "expo-router";

const ONBOARDING2 = require("../../../assets/images/fingerprint.png");

export default function FingerPrintScreen() {
  const handleSecurityFingerPrint = () => {
    router.push("../(tabs)/user-home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Security Fingerprint</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image source={ONBOARDING2} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Use Fingerprint to Access</Text>
            <Text style={styles.textDescription}>
              Access your finances securely and conveniently with fingerprint
              authentication.
            </Text>
          </View>
          <ButtonComp
            onPress={handleSecurityFingerPrint}
            btnText="Use Fingerprint"
            containerColor="#00D09E"
            contentColor="black"
          />
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
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  circle: {
    width: 175,
    height: 175,
    borderRadius: 125,
    backgroundColor: "#00D09E",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: { gap: 10 },
  textHeading: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textDescription: {
    fontSize: 15,
    textAlign: "center",
  },
});
