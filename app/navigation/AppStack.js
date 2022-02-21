import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideBarNavigator from "./SideBarNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Sidebar"
        component={SideBarNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
