import React from "react";
import { useFormikContext } from "formik";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    width: "100%",
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
});

export default SubmitButton;
