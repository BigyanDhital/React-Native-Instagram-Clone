import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import UserInfo from "./UserInfo";
import UserPhotos from "./UserPhotos";
import TaggedPhotos from "./TaggedPhotos";
import { FlatList, ScrollView } from "react-native-gesture-handler";

// const Tabs = createMaterialTopTabNavigator();

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
      <ScrollView style={{ flex: 1 }}>
        <UserInfo {...{ userInfo }} />
        <UserPhotos images={userInfo.images} />

        {/* <Tabs.Navigator>
          <Tabs.Screen
            name="userPhotos"
            component={() => <UserPhotos images={userInfo.images} />}
          />
          <Tabs.Screen name="taggedPhotos" component={() => <TaggedPhotos />} />
        </Tabs.Navigator> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
