import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";

const BottomTabs = createBottomTabNavigator();

const BottomTabLayout: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Dashboard" component={Dashboard} />
        <BottomTabs.Screen name="Home" component={Home} />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
});
