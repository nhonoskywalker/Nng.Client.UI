import React from "react";
import { TextInput, StyleSheet } from "react-native";

function PasswordInput({ children }) {
  return (
    <TextInput
      secureTextEntry
      style={styles.inputControl}
      placeholder="************"
      placeholderTextColor="#6b7280"
      maxLength={27}
    >
      {children}
    </TextInput>
  );
}

export default PasswordInput;

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
