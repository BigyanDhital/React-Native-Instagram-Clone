import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DoubleTap, ProgressiveImage } from "components";
const { width, height } = Dimensions.get("window");
// import thumbnail from "../../assets/images/image1.jpg";
const POST_WIDTH = width * 0.9;
const POST_HEIGHT = width;

const POST_ACTION_ICONS_SIZE = 21;
const LIKE_ANIMATION_ICON_SIZE = POST_ACTION_ICONS_SIZE * 3;
const scaleLarge = POST_WIDTH / LIKE_ANIMATION_ICON_SIZE;
const Post = props => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const likeAnim = new Animated.Value(0);
  let {
    id,
    user = "username",
    userImage,
    thumbnail,
    image,
    likes,
    comments,
  } = props.post;
  if (!userImage) userImage = image;

  useEffect(() => {
    Animated.timing(likeAnim, {
      duration: 800,
      toValue: liked ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [liked]);
  const likePost = () => {
    setLiked(!liked);
  };

  const scale = likeAnim.interpolate({
    inputRange: [0, 0.3, 0.7, 0.75, 1],
    outputRange: [scaleLarge, 1, 3, 1, 4],
  });
  const smallIconScale = likeAnim.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [1.1, 0.5, 1],
  });
  const opacity = likeAnim.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [1, 1, 0],
  });

  return (
    <View
      style={{
        position: "relative",
        marginVertical: 10,
        marginHorizontal: width * 0.05,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 20,
              borderWidth: 1,
              padding: 2,
              borderColor: "#F47C2F",
            }}>
            <Image
              source={userImage}
              style={{
                height: undefined,
                width: undefined,
                flex: 1,
                borderRadius: 20,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{user}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} />
      </View>
      <DoubleTap doubleTap={() => likePost()}>
        <ProgressiveImage
          // source={{ uri: largeImageURL }}
          source={image}
          thumbnail={thumbnail}
          style={{
            width: POST_WIDTH,
            height: POST_HEIGHT,
            borderRadius: 20,
          }}
        />
      </DoubleTap>
      {liked && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            opacity,
            transform: [{ scale }],
          }}>
          <View
            style={{
              // backgroundColor: "#ffffff50",
              padding: 10,
              borderRadius: 10,
            }}>
            <AntDesign
              name="hearto"
              color={"#ff0000"}
              size={LIKE_ANIMATION_ICON_SIZE}
            />
          </View>
        </Animated.View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={likePost}>
            <Animated.View style={{ transform: [{ scale: smallIconScale }] }}>
              <AntDesign
                name="hearto"
                color={liked ? "#ff0000" : "#444"}
                size={POST_ACTION_ICONS_SIZE}
              />
            </Animated.View>
          </TouchableOpacity>
          <Text style={{ paddingLeft: 7 }}>{likes}</Text>
          <SimpleLineIcons
            name="bubble"
            style={{ marginLeft: 20 }}
            size={POST_ACTION_ICONS_SIZE}
          />
          <Text style={{ paddingLeft: 7 }}>{comments}</Text>
        </View>
        <FeatherIcon name="bookmark" size={POST_ACTION_ICONS_SIZE} />
      </View>
    </View>
  );
};

export default Post;
