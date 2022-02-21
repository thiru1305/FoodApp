import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import HelpCenter from "../screens/HelpCenter";
import PaymentMethod from "../screens/PaymentMethod";
import Orders from "../screens/Orders";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import CustomDrawer from "./CustomDrawer";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import colors from "../config/colors";
import { auth } from "../../firebase";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const Drawer = createDrawerNavigator();

function SideBarNavigator(props) {
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
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "Montserrat_500Medium",
          fontSize: 15,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Feather name="home" size={22} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({ tintColor }) => (
            <FontAwesome name="list-alt" size={22} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="account"
              size={22}
              color={tintColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment Methods"
        component={PaymentMethod}
        options={{
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="payment" size={22} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help Center"
        component={HelpCenter}
        options={{
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="help-center" size={22} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Feather name="settings" size={22} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="logout" size={22} color={tintColor} />
          ),
          header: ({ navigation }) => {
            return auth
              .signOut()
              .then(() => {
                navigation.replace("Login");
              })
              .catch((error) => alert(error.message));
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default SideBarNavigator;
