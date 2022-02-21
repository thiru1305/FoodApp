import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 22, color: colors.secondary, fontWeight: "bold" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
