import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { Text } from "react-native-paper";

const Exercises: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.bigTitle}>Main</Text>
            <Button
              onPress={() => navigation.navigate("Identity Verification")}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
         </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 18,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 40,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
});

export default Exercises;
