import "react-native-gesture-handler";

import React from "react";
import { View, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";
import ExploreDetailPage from "./pages/ExplorePage/ExploreDetail";
import AddNewPostPage from "./pages/AddNewPostPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";

const tabIconSize = 25;
const BottomTabBar = createBottomTabNavigator();
// const UserProfile = createStackNavigator()
const Explore = createStackNavigator();
const ExploreStack = () => {
  return (
    <Explore.Navigator headerMode="none">
      <Explore.Screen name="explorePage" component={ExplorePage} />
      <Explore.Screen name="exploreDetail" component={ExploreDetailPage} />
    </Explore.Navigator>
  );
};

const colorFocused = "#F88925";
const iconColor = "#222";
const App = () => {
  return (
    <NavigationContainer>
      <BottomTabBar.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,

          showLabel: false,
          style: {
            elevation: 0,
            // paddingVertical: 5,
            backgroundColor: "#ffffff00",
            borderTopWidth: 0,
          },
        }}>
        <BottomTabBar.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={tabIconSize}
                color={focused ? colorFocused : iconColor}
              />
            ),
          }}
          name="home"
          component={Homepage}
        />
        <BottomTabBar.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="search1"
                size={tabIconSize}
                color={focused ? colorFocused : iconColor}
              />
            ),
          }}
          name="explore"
          component={ExploreStack}
        />
        <BottomTabBar.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: -40,
                  elevation: 4,
                }}>
                <LinearGradient
                  style={{
                    borderRadius: 100,
                    height: 60,
                    width: 60,
                  }}
                  colors={["#E5197E", colorFocused]}>
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 2,
                      borderColor: "#fff",
                      elevation: 1,
                      borderRadius: 100,
                    }}>
                    <AntDesign
                      name="plus"
                      size={tabIconSize}
                      color={focused ? colorFocused : iconColor}
                      color="#fff"
                    />
                  </View>
                </LinearGradient>
              </View>
            ),
          }}
          name="addNewPost"
          component={AddNewPostPage}
        />
        <BottomTabBar.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="hearto"
                size={tabIconSize}
                color={focused ? colorFocused : iconColor}
              />
            ),
          }}
          name="notifications"
          component={NotificationsPage}
        />
        <BottomTabBar.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FeatherIcon
                name="user"
                size={tabIconSize}
                color={focused ? colorFocused : iconColor}
              />
            ),
          }}
          name="profile"
          component={ProfilePage}
        />
      </BottomTabBar.Navigator>
    </NavigationContainer>
  );
};

export default App;
