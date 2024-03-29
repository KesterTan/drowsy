import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import CameraScreen from "./src/screens/CameraScreen";
import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Success from "./src/screens/Success";
import { Camera } from "expo-camera";

const routes = [
  { title: "Dashboard", route: "Dashboard", icon: "dashboard" },
  { title: "Home", route: "Home", icon: "sports-baseball" },
  { title: "Profile", route: "Profile", icon: "person" },
];

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {routes.map((route, index) => {
        const label = route.title;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.route,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.route, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.route,
          });
        };

        const color = isFocused ? "#673ab7" : "#222";

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.appBarEntry}
            key={index}
          >
            <MaterialIcons name={route.icon} size={24} color={color} />
            <Text style={{ color }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabs = createBottomTabNavigator();

// If you are getting type errors, you need to edit src/screenTypes.ts
export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <BottomTabs.Navigator tabBar={(props) => <TabBar {...props} />}>
          <BottomTabs.Screen name="Dashboard" component={Dashboard} />
          <BottomTabs.Screen name="Home" component={Home} />
          <BottomTabs.Screen name="Profile" component={Profile} />
          <BottomTabs.Screen
            name="Identity Verification"
            component={CameraScreen}
          />
          <BottomTabs.Screen
            name="Success"
            component={Success}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appBarEntry: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
