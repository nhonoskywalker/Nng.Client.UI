import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

type CreateAccountSuccessPageProps = {
  navigation: {
    navigate: Function;
  };
};

const CreateAccountSuccessPage = (props: CreateAccountSuccessPageProps) => {
  const { navigation } = props;

  return (
    <View style={styles.background}>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../../assets/successBg.jpg")}
      >
        <View style={styles.successContainer}>
          <Feather
            name="check-circle"
            size={100}
            color="yellowgreen"
            style={styles.successIcon}
          />

          <View>
            <Text style={styles.successText}>
              You have successfully created your account
            </Text>
          </View>

          <AppButton
            title="SIGN IN"
            color="secondary"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreateAccountSuccessPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  successIcon: {
    width: 100,
    height: 100,
  },
  successContainer: {
    position: "absolute",
    top: 250,
    alignSelf: "center",
    alignItems: "center",
  },
  successText: {
    margin: 20,
    color: "white",
    fontSize: 17,
    fontWeight: "400",
  },
});
