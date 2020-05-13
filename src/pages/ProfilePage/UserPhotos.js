import React from "react";
import { View, ScrollView, Text, Image, Dimensions } from "react-native";
import { images } from "../../assets";
const { height, width } = Dimensions.get("window");

const IMAGE_SIZE = (width - 88) / 3;

const UserPhotos = props => {
  let { images } = props;
  return (
    <View
      style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 20 }}>
      {images.map((image, index) => {
        return (
          <View
            key={index}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
              borderRadius: 10,
              margin: 8,
              // padding: 5,
            }}>
            <Image
              source={{ uri: image.thumbnail }}
              style={{
                height: undefined,
                width: undefined,
                flex: 1,
                borderRadius: 10,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default UserPhotos;
