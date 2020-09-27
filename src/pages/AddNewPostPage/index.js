import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import { Header } from "components";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");
const AddNewPostPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Gallery" />
      <Text
        style={{
          fontSize: 18,
          color: "#F88925",
          fontWeight: "500",
          textAlign: "center",
        }}>
        Inspired by
      </Text>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <Image
            source={require("../../assets/images/dribble_inspiration.jpg")}
            style={{ width: width, height: width, resizeMode: "contain" }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",

            paddingHorizontal: 10,
          }}
          onPress={() => Linking.openURL("https://dribbble.com/shots/7112447")}>
          <Text style={{ color: "blue", paddingHorizontal: 5 }}>
            View on Dribbble
          </Text>
          <FeatherIcon name="external-link" color="blue" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddNewPostPage;
