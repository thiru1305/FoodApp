import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";
import AppForm from "../forms/AppForm";
import { useNavigation } from "@react-navigation/native";
import AppFormPasswordField from "../forms/AppFormPasswordField";
import colors from "../config/colors";
import { auth } from "../../firebase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const navigation = useNavigation();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/FoodDelivery.png")}
      />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
              res.user.updateProfile({
                displayName: values.username,
              });
              navigation.navigate("Login");
              actions.resetForm();
            })
            .catch((error) => alert(error.message));
        }}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormPasswordField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically
        />
        <TouchableOpacity>
          <SubmitButton title="Register" />
        </TouchableOpacity>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFD8BB",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  inputField: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
});

export default RegisterScreen;
