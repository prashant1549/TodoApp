import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ListItem({ title }) {
  console.log(title);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 60,
  },
  title: {
    color: "gray",
    fontWeight: "bold",
  },
});
