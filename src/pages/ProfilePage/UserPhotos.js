import React from "react";
import { View, ScrollView, Text, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ProgressiveImage } from "components";

const { height, width } = Dimensions.get("window");

const GRID_PADDING = 10;
const IMAGE_SIZE = (width - GRID_PADDING * 2) / 3;

const UserPhotos = props => {
  let { images } = props;
  return (
    <View style={{ paddingHorizontal: GRID_PADDING }}>
      {/* // style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 20 }} */}

      <FlatList
        data={images}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <View
              // key={index}
              style={{
                height: IMAGE_SIZE,
                width: IMAGE_SIZE,
                borderRadius: 10,
                padding: GRID_PADDING,
                // padding: 5,
              }}>
              <ProgressiveImage
                source={{ uri: item.thumbnail }}
                style={{
                  height: undefined,
                  width: undefined,
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserPhotos;
