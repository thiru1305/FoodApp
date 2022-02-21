import { auth } from "../../firebase";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Logout(props) {
  const navigation = useNavigation();

  const signOut = () => {
    return auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <TouchableOpacity onPress={signOut}></TouchableOpacity>
    </View>
  );
}

export default Logout;
