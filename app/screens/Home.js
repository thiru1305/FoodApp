import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import PopularCard from "../components/PopularCard";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import colors from "../config/colors";
import Categories from "../components/Categories";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

function Home() {
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
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.screen}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.leftIcon}
          />
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MaterialCommunityIcons
              name="menu"
              size={30}
              color="black"
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Food</Text>
          <Text style={styles.subTitle}>Delivery</Text>
        </View>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search..."
            style={{
              flex: 1,
              borderBottomWidth: 2,
              borderBottomColor: colors.text2nd,
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
            }}
          />
        </View>

        {/* Categories */}
        <Categories />

        {/* Popular */}
        <View>
          <Text style={styles.popularHeaderText}>Popular</Text>
          <PopularCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rightIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  subTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
  },
  searchBar: {
    flexDirection: "row",
  },
  searchIcon: {
    marginRight: 10,
    marginTop: 10,
  },
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
  popularHeaderText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
});

export default Home;
