import React from "react";
import { TextInput, StyleSheet } from "react-native";

function EmailInput({ children }) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputControl}
      placeholder="user@example.com"
      placeholderTextColor="#6b7280"
    >
      {children}
    </TextInput>
  );
}

export default EmailInput;

const styles = StyleSheet.create({
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
