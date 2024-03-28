import React from "react";
import { Text } from "react-native";

type InputLabelProps = {
  children: string;
};

function InputLabel(props: InputLabelProps) {
  const { children } = props;

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
