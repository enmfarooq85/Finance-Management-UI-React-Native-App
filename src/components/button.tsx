import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type ButtonCompProps = {
  btnText: string;
  containerColor: string;
  contentColor: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function ButtonComp({
  btnText,
  containerColor,
  contentColor,
  onPress,
  disabled = false,
  loading = false,
}: ButtonCompProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: containerColor,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={contentColor} />
      ) : (
        <Text style={[styles.buttonText, { color: contentColor }]}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
