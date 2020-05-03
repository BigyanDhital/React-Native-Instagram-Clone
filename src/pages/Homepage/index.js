import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "./Header";
import Posts from "./Posts";
const index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      {/* <ScrollView style={{ flex: 1 }}> */}
      <Posts />
      {/* </ScrollView> */}
    </View>
  );
};

export default index;
