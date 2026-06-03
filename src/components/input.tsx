import React, { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export default function InputComp({
  label,
  error,
  containerStyle,
  leftElement,
  rightElement,
  editable = true,
  ...props
}: AppInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInput,
          error && styles.errorInput,
          !editable && styles.disabledInput,
        ]}
      >
        {leftElement}

        <TextInput
          {...props}
          editable={editable}
          style={styles.input}
          placeholderTextColor="#999"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {rightElement}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 50,
    paddingHorizontal: 12,
    minHeight: 50,
    backgroundColor: "#FFF",
  },
  focusedInput: {
    borderColor: "#00D09E",
  },
  errorInput: {
    borderColor: "#EF4444",
  },
  disabledInput: {
    backgroundColor: "#F3F4F6",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    paddingVertical: 12,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4,
  },
});
