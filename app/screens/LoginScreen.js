import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";
import AppForm from "../forms/AppForm";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { auth } from "../../firebase";
import AppFormPasswordField from "../forms/AppFormPasswordField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/FoodDelivery.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then((userCredentials) => {
              const user = userCredentials.user;
              setTimeout(() => {
                console.log(values);
                actions.resetForm({});
                navigation.navigate("Main");
              }, 1000);
            })
            .catch((error) => alert(error.message));
        }}
      >
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
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <SubmitButton title="Sign In" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 14,
              color: colors.price,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Don't have an account? Sign up
          </Text>
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

export default LoginScreen;
