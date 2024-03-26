import React from "react";
import { Text } from "react-native";

function InputLabel({ children }) {
  return (
    <Text
      style={{
        fontSize: 17,
        fontWeight: "700",
        color: "#222",
        marginBottom: 9,
      }}
    >
      {children}
    </Text>
  );
}

export default InputLabel;
