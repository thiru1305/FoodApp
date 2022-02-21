import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FeedNavigation from "./app/navigation/FeedNavigation";
import SideBarNavigator from "./app/navigation/SideBarNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <FeedNavigation />
    </NavigationContainer>
  );
}
