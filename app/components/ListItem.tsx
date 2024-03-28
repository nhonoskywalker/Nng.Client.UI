import React from "react";
import { View, StyleSheet, Image, ImageURISource } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

type ListItemProps = {
  title: string;
  subTitle: string;
  image: ImageURISource;
};

function ListItem(props: ListItemProps) {
  const { title, subTitle, image } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "700",
  },
});

export default ListItem;
