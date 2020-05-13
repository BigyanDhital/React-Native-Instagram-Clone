import React, { useState, useEffect } from "react";
import { View, Text, Image, Animated, Modal, createA } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimatedModal = Animated.createAnimatedComponent(Modal);
const ViewStory = props => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  const closeStoryView = () => {
    Animated.timing(animation, {
      duration: 400,
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      props.closeStoryView();
    });
  };
  console.log("View story", props);
  return (
    <AnimatedModal
      style={{ flex: 1 }}
      animated={false}
      // transparent={true}
      style={{ backgroundColor: "#000" }}
      onDismiss={closeStoryView}
      visible={props.visible}
      onRequestClose={() => closeStoryView()}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          position: "relative",
        }}>
        <View style={{ position: "absolute", top: 40, right: 20, zIndex: 2 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00000030",
              borderRadius: 50,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => closeStoryView()}>
            <FeatherIcon name="x" color="#fff" size={20} />
            {/* <Text style={{ alignSelf: "flex-end", color: "#fff" }}>Close</Text> */}
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            flex: 1,
            opacity: animation,

            transform: [{ scale: animation }],
          }}>
          <Image
            resizeMode="cover"
            source={props.story.image}
            style={{ height: undefined, width: undefined, flex: 1, zIndex: 1 }}
          />
        </Animated.View>
        {/* </SafeAreaView> */}
      </View>
    </AnimatedModal>
  );
};

export default ViewStory;
