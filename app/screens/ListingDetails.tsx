import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";

type ListingDetailsProps = {
  navigation: {
    navigate: Function;
  };
};

function ListingDetails(props: ListingDetailsProps) {
  const { navigation } = props;
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/plumbing.png")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Electronic Repairs</AppText>
        <AppText style={styles.subTitle}> Siguradong Garantisabog</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/face.png")}
            title="Ashvin Sunga"
            subTitle="5 Listings"
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Sign out"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "50%",
    height: 100,
    alignSelf: "center",
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 35,
  },
});

export default ListingDetails;
