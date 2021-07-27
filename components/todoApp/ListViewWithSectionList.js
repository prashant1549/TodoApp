import React from "react";
import { SectionList, View, StyleSheet, StatusBar, Text } from "react-native";
import SectionListView from "./SectionListView";

export default function ListViewWithSectionList() {
  const DATA = [
    {
      title: "Done",
      data: [
        "Todo1",
        "Todo2",
        "Todo3",
        "Todo4",
        "Todo5",
        "Todo6",
        "Todo7",
        "Todo8",
      ],
    },
    {
      title: "Todo",
      data: ["aaa1", "aaa2", "aaa3", "aaa4", "aaa5", "aaa7", "aaa8"],
    },
  ];
  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <SectionListView title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  header: {
    fontSize: 32,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
  },
});
