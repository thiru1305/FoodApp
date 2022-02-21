import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, error, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.text2nd}
          style={styles.icon}
        />
      )}
      {error ? (
        <View>
          <Text
            style={{
              color: colors.secondary,
              fontSize: 12,
              fontFamily: "Montserrat_700Bold",
              position: "absolute",
              paddingTop: 30,
              left: -30,
            }}
          >
            {error}
          </Text>
        </View>
      ) : null}
      <TextInput
        placeholderTextColor={colors.text2nd}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
