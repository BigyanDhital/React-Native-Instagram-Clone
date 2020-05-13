import React, { useState, useEffect } from "react";
import { View, Text, Image, Animated, Modal, createA } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      style={{ opacity: 0 }}
      onDismiss={closeStoryView}
      visible={props.visible}
      onRequestClose={() => closeStoryView()}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => closeStoryView()}>
          <Text style={{ alignSelf: "flex-end" }}>Close</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            flex: 1,
            opacity: animation,
            transform: [{ scale: animation }],
          }}>
          <Image
            resizeMode="contain"
            source={props.story.image}
            style={{ height: undefined, width: undefined, flex: 1 }}
          />
        </Animated.View>
      </SafeAreaView>
    </AnimatedModal>
  );
};

export default ViewStory;
