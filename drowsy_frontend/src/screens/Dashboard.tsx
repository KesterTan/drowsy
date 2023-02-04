import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Dashboard: React.FC = ({ navigation }: any) => {
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.bigTitle}>Dashboard</Text>
        </View>
  
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  container: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 18,
  },
  box: {
    width: 50,
    height: 50,
  },
  card: {
    width: "100%",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#dddddd",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 10000,
    textAlign: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 40,
    alignText: "left",
  },
  friendsImage: {
    height: 120,
    width: 260,
    marginTop: 10,
    marginLeft: 0,
  },
  giftImage: {
    height: 200,
    width: 200,
        marginLeft: 30,
  }
});

export default Dashboard;
