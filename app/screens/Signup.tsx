import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";

import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";
import AppButton from "../components/AppButton";
import InputLabel from "../components/InputLabel";

const Signup = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/nonogo.png")}
            style={styles.headerImage}
            alt=""
          />

          <Text style={styles.title}> Create an account</Text>
        </View>

        <View>
          <View style={styles.input}>
            <InputLabel> Email Address </InputLabel>

            <EmailInput
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>

          <View style={styles.input}>
            <InputLabel> Password </InputLabel>

            <PasswordInput
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>

          <View style={styles.input}>
            <InputLabel> Confirm Password </InputLabel>

            <PasswordInput
              value={form.confirmPassword}
              onChangeInputLabel={(confirmPassword) =>
                setForm({ ...form, confirmPassword })
              }
            />
          </View>

          <View style={styles.formAction}>
            <AppButton
              title="Create Account"
              onPress={() => {
                navigation.navigate("AccountSuccessPage");
              }}
            />
          </View>

          <TouchableOpacity
            style={{ marginTop: "auto" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.formFooter}>
              Already have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}> Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddings: 20,
    flex: 1,
    margin: 30,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.25,
  },
  header: {
    marginVertical: 40,
  },
  headerImage: {
    width: 150,
    height: 80,
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1e1e1e",
    marginBottom: 6,
    textAlign: "center",
  },
});
