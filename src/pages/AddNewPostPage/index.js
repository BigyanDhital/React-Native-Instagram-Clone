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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: "#F88925",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Inspired by
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onPress={() => Linking.openURL("https://dribbble.com/shots/7112447")}>
          <Text style={{ color: "#62DAFB", paddingHorizontal: 5 }}>
            https://dribbble.com/shots/7112447
          </Text>
          <FeatherIcon name="external-link" color="#62DAFB" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <Image
            source={require("../../assets/images/dribble_inspiration.jpg")}
            style={{ width: width, height: width, resizeMode: "contain" }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ paddingVertical: 5, fontWeight: "500" }}>
              Upcoming:
            </Text>
            <Text>Better Stories</Text>
            <Text>Firebase authentication / login system</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewPostPage;
