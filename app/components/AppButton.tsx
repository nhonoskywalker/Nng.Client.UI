import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};

function AppButton(props: AppButtonProps) {
  const { title, onPress, color = "primary" } = props;

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.btnText}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "",
    marginVertical: 10,
    borderRadius: 10,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});

export default AppButton;
