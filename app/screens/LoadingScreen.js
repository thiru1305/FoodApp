import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import colors from "../config/colors";

const slides = [
  {
    key: 1,
    title: "Discover place near you",
    text: "We make it simple to find the food you crave. Enter your address and let us do the rest",
    image: require("../assets/images/find-restaurant.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Choose your favorite food",
    text: "Pick your favorite food from the menu and get exclusive rewards",
    image: require("../assets/images/pick-food.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Get delivery on time",
    text: "We make food ordering fast, simple and delivery at your doorstep",
    image: require("../assets/images/food-delivery.png"),
    backgroundColor: "#22bcb5",
  },
];

function LoadingScreen({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.buttonCircle}>
          <Ionicons
            name="md-checkmark"
            color="rgba(255, 255, 255, .9)"
            size={24}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      activeDotStyle={{ width: 30, backgroundColor: "#3DDEA8" }}
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      showSkipButton={true}
      renderSkipButton={renderSkipButton}
    />
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 200,
    resizeMode: "contain",
  },
  skip: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  skipText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    color: "#a2a6a7",
    textAlign: "center",
  },
  slide: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    paddingBottom: 30,
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    color: "#a2a6a7",
    textAlign: "center",
  },
});

export default LoadingScreen;
