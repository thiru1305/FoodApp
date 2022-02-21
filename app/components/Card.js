import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import Icon from "./Icon";

function Card({ title, image }) {
  return (
    <View style={[styles.card, styles]}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <Icon
          name="navigate-next"
          size={20}
          backgroundColor={colors.secondary}
          iconColor="white"
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    marginRight: 15,
    marginLeft: 1,
    marginBottom: 1,
    marginTop: 10,
    width: 105,
    height: 177,
    elevation: 2,
  },
  icon: {
    width: 26,
    height: 26,
  },
  image: {
    width: 60,
    height: 60,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    justifyContent: "center",
  },
});

export default Card;
