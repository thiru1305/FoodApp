import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import colors from "../config/colors";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

function CustomDrawer(props) {
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
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("../assets/images/menu-bg.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: colors.black,
              fontFamily: "Montserrat_500Medium",
              fontSize: 18,
            }}
          >
            Mary Jane
          </Text>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;
