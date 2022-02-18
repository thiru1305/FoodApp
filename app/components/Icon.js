import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  onPress,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons
        name={name}
        size={size * 0.5}
        color={iconColor}
        onPress={onPress}
      />
    </View>
  );
}

export default Icon;
