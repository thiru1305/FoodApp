import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import popularData from "../assets/data/popularData";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function PopularCard() {
  const navigation = useNavigation();

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
    <>
      <FlatList
        data={popularData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() =>
              navigation.navigate("Details", {
                item: item,
              })
            }
          >
            <View
              style={[
                styles.popularContainer,
                { marginTop: item.id === 1 ? 10 : 20 },
              ]}
            >
              <View style={styles.headline}>
                <MaterialCommunityIcons
                  name="crown"
                  size={16}
                  color={colors.primary}
                />
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 14,
                    marginLeft: 10,
                  }}
                >
                  {item.headerText}
                </Text>
              </View>
              <View style={styles.foodDetails}>
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 14,
                    color: colors.text,
                    marginBottom: 5,
                  }}
                >
                  {item.title} {item.subTitle}
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 12,
                    color: colors.text2nd,
                  }}
                >
                  {item.weight}
                </Text>
              </View>
              <View style={styles.addToCart}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.navigate("Details", {
                      item: item,
                    })
                  }
                >
                  <View style={styles.plusSymbolIcon}>
                    <Feather name="plus" size={14} color="black" />
                  </View>
                </TouchableOpacity>
                <MaterialCommunityIcons
                  name="star"
                  size={12}
                  color={colors.primary}
                />
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 12,
                    marginLeft: 5,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <Image
                resizeMode="contain"
                source={item.image}
                style={{
                  width: 210,
                  height: 125,
                  position: "absolute",
                  left: 196,
                  marginVertical: 18,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  popularContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
  },
  headline: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  foodDetails: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  addToCart: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusSymbolIcon: {
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.primary,
    width: 90,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});

export default PopularCard;
