import React from "react";
import { View, Text } from "react-native";
import { Header } from "components";

const AddNewPostPage = () => {
  return (
    <View>
      <Header title="Gallery" />
      <Text
        style={{
          fontSize: 18,
          color: "#888",
          fontWeight: "500",
          textAlign: "center",
        }}>
        Add a new post
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "#888",
          fontWeight: "500",
          textAlign: "center",
        }}>
        Coming soon
      </Text>
    </View>
  );
};

export default AddNewPostPage;
