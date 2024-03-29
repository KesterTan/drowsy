import React from "react";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomInputText";
import CustomSnackBar from "../components/CustomSnackBar";
import { ScrollView } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Register from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const Login: React.FC = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [snackIsVisible, setSnackIsVisible] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          marginTop: "10%",
        }}
      >
        <Image
          style={{ height: 230, width: 300 }}
          source={require("../assets/images/productive_alarm_logo.png")}
        />
      </View>
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 36,
        }}
      >
        <CustomTextInput label="Email" onChangeText={setEmail} value={email} />
        <CustomTextInput
          label="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
        />
      </View>
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomButton
          mode="contained"
          style={[styles.button, { marginBottom: 12 }]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          SIGN IN
        </CustomButton>
        <CustomButton
          mode="outlined"
          color={Colors[colorScheme].tint}
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          SIGN UP
        </CustomButton>
      </View>
      <CustomSnackBar
        visible={snackIsVisible}
        onDismiss={() => {
          setSnackIsVisible(false);
        }}
        type="error"
        message={snackMessage}
      ></CustomSnackBar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 30,
    width: 160,
  },
});

export default Login;
