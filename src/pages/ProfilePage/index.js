import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import UserInfo from "./UserInfo";
import UserPhotos from "./UserPhotos";
import TaggedPhotos from "./TaggedPhotos";
import { FlatList, ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");

// const Tabs = createMaterialTopTabNavigator();

const GRID_PADDING = 8;
const IMAGE_SIZE = (width - GRID_PADDING * 2) / 3;

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    profileImage: "https://picsum.photos/id/11/200",
    images: [],
  });
  const [isBusy, setisBusy] = useState(false);
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    let url = "https://picsum.photos/v2/list?page=1&limit=100";
    let data = await fetch(url);
    let images = await data.json();
    console.log(url, images);
    images = images.map(image => {
      image.thumbnail = getThumb(image.download_url);
      return image;
    });
    setUserInfo({ ...userInfo, images });
  };

  const getThumb = url => {
    let result = "";
    let indexOfId = url.indexOf("id/");

    let indexOfSize = url.indexOf("/", indexOfId + 3);
    result = url.slice(0, indexOfSize + 1) + "200";

    return result;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, paddingHorizontal: GRID_PADDING }}>
        <FlatList
          data={userInfo.images}
          keyExtractor={item => item.id}
          numColumns={3}
          ListHeaderComponent={<UserInfo {...{ userInfo }} />}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: IMAGE_SIZE,
                  width: IMAGE_SIZE,
                  borderRadius: 10,
                  padding: GRID_PADDING,
                }}>
                <Image
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

        {/* <Tabs.Navigator>
          <Tabs.Screen
            name="userPhotos"
            component={() => <UserPhotos images={userInfo.images} />}
          />
          <Tabs.Screen name="taggedPhotos" component={() => <TaggedPhotos />} />
        </Tabs.Navigator> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
