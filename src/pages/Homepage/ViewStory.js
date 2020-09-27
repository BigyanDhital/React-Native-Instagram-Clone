import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  State,
  Directions,
  FlingGestureHandler,
} from "react-native-gesture-handler";
const { width } = Dimensions.get("window");
const AnimatedModal = Animated.createAnimatedComponent(Modal);
const ViewStory = props => {
  const animation = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);
  useEffect(() => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 3100,
      useNativeDriver: true,
    }).start();
  }, [props.story]);

  const closeStoryView = () => {
    Animated.timing(animation, {
      duration: 400,
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      props.closeStoryView();
    });
  };
  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width + 100, 0],
  });
  return (
    // <FlingGestureHandler
    //   direction={Directions.DOWN}
    //   numberOfPointers={40}
    //   onHandlerStateChange={({ nativeEvent }) => {
    //     if (nativeEvent.2oldState === State.ACTIVE) {
    //       props.closeStoryView();
    //     }
    //   }}>
    <AnimatedModal
      style={{ flex: 1 }}
      // animated={true}
      // transparent={true}
      // animationType="slide"
      direction="top"
      opacity={animation}
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
        <Animated.View
          style={{
            height: 3,
            backgroundColor: "#fff",
            width,
            borderRadius: 4,
            transform: [{ translateX }],
          }}
        />

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

            transform: [{ translateY }, { scale: animation }],
          }}>
          <Image
            resizeMode="cover"
            source={{ uri: props.story.largeImageURL }}
            style={{
              height: undefined,
              width: undefined,
              flex: 1,
              zIndex: 1,
            }}
          />
        </Animated.View>
        {/* </SafeAreaView> */}
      </View>
    </AnimatedModal>
    // </FlingGestureHandler>
  );
};

export default ViewStory;
