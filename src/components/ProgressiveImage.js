import React, { useState, useEffect } from "react";
import { View, Animated, Text, Image } from "react-native";

const ProgressiveImage = props => {
  const { thumbnail, source } = props;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const fullImageAnim = new Animated.Value(0);

  const setSuccessAnim = () => {
    Animated.timing(fullImageAnim, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setSuccess(true);
    });
  };

  const opacity = fullImageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const revOpacity = fullImageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  return (
    <View style={{ position: "relative" }}>
      <Animated.View
        style={{
          borderWidth: error ? 2 : 0,
          borderColor: "red",
          opacity,
        }}>
        <Image
          onLoad={setSuccessAnim}
          onError={setError}
          source={source}
          {...props}
        />
      </Animated.View>
      {success || error ? null : (
        <Animated.View
          style={{
            opacity: revOpacity,
            position: "absolute",
            top: 0,
            zIndex: 4,
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Image
            style={{
              height: undefined,
              width: undefined,
              flex: 1,
              ...props.style,
              //   borderColor: "red",
              //   borderWidth: 2,
            }}
            source={thumbnail}
          />
        </Animated.View>
      )}
    </View>
  );
};

export { ProgressiveImage };
