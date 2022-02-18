import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
import Icon from "../components/Icon";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.navigateLeftIcon}>
            <Icon
              name="chevron-left"
              size={24}
              backgroundColor="white"
              iconColor="black"
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.starRightIcon}>
          <Icon
            name="star"
            size={24}
            backgroundColor={colors.primary}
            iconColor="white"
          />
        </View>
      </View>
      <View style={styles.headerTitle}>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            fontSize: 32,
            color: colors.text,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            fontSize: 32,
            color: colors.text,
          }}
        >
          {item.subTitle}
        </Text>
      </View>
      <View style={styles.price}>
        <Text
          style={{
            fontFamily: "Montserrat_600SemiBold",
            fontSize: 32,
            color: colors.price,
          }}
        >
          {item.price}
        </Text>
      </View>
      <View>
        <View style={styles.sizeVariation}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
              color: colors.text2nd,
            }}
          >
            Size
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 16,
              color: colors.text,
            }}
          >
            {item.size}
          </Text>
        </View>
        <View style={styles.crust}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
              color: colors.text2nd,
            }}
          >
            Crust
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 16,
              color: colors.text,
            }}
          >
            {item.crust}
          </Text>
        </View>
        <View style={styles.delivery}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
              color: colors.text2nd,
            }}
          >
            Delivery in
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 16,
              color: colors.text,
            }}
          >
            {item.deliveryTime}
          </Text>
        </View>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.ingredients}>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            fontSize: 16,
            color: colors.text,
          }}
        >
          Ingredients
        </Text>
        <FlatList
          data={item.ingredients}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} />
            </View>
          )}
        />
      </View>
      <View style={styles.button}>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            fontSize: 14,
            color: "#000000",
            marginRight: 10,
          }}
        >
          Place an order
        </Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  },
  navigateLeftIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    elevation: 2,
  },
  starRightIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 20,
    elevation: 2,
  },
  headerTitle: {
    marginTop: 30,
  },
  price: {
    marginTop: 20,
    marginBottom: 30,
  },
  sizeVariation: {
    marginBottom: 20,
  },
  crust: {
    marginBottom: 20,
  },
  delivery: {
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    width: 296,
    height: 176,
    resizeMode: "contain",
    left: 142,
  },
  ingredients: {
    marginTop: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 2,
    marginBottom: 2,
    marginTop: 15,
    elevation: 2,
    width: 100,
    height: 80,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: colors.primary,
    padding: 15,
    marginTop: 30,
    width: "100%",
  },
});

export default Details;
