import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import categoriesData from "./../assets/data/categoriesData";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

function Categories() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

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
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => setSelectedCategoryIndex(index)}
            >
              <View
                style={[
                  styles.categoryItemWrapper,
                  {
                    backgroundColor:
                      selectedCategoryIndex == index
                        ? colors.primary
                        : colors.white,
                  },
                ]}
              >
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View
                  style={[
                    styles.categorySelectWrapper,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? colors.white
                          : colors.secondary,
                    },
                  ]}
                >
                  <Feather
                    name="chevron-right"
                    size={8}
                    style={styles.categorySelectIcon}
                    color={
                      selectedCategoryIndex == index
                        ? colors.black
                        : colors.white
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20,
    marginVertical: 1,
    elevation: 1,
    marginLeft: 1,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
});

export default Categories;
