import React from "react";
import { TextInput, StyleSheet } from "react-native";

type EmailInputProps = {
  value: string;
  onChangeText: Function;
};

function EmailInput(props: EmailInputProps) {
  const { value } = props;
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputControl}
      placeholder="user@example.com"
      placeholderTextColor="#6b7280"
    >
      {value}
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
