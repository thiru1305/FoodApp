import React from "react";
import AppTextInput from "./AppTextInput";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import colors from "../config/colors";

function AppFormPasswordField({ name, width, ...otherProps }) {
  const { setFieldValue, errors, touched, values, handleBlur } =
    useFormikContext();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  return (
    <>
      <View style={styles.inputContainer}>
        <AppTextInput
          onBlur={handleBlur(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          width={width}
          secureTextEntry={passwordVisibility}
          error={touched[name] && errors[name]}
          {...otherProps}
        />
        <Pressable
          onPress={handlePasswordVisibility}
          style={{
            right: 40,
          }}
        >
          <MaterialCommunityIcons
            name={rightIcon}
            size={22}
            color={colors.text2nd}
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppFormPasswordField;
