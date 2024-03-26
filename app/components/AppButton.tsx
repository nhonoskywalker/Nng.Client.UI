import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
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
    backgroundColor: colors.primary,
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
