import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageEditor,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.row}>
            <FeatherIcon style={styles.icon} name="camera" size={25} />
            <View style={styles.instagramTextLogoContainer}>
              <Image
                source={require("../../assets/images/instagram-text-logo.png")}
                resizeMode="contain"
                style={styles.instagramTextLogo}
              />
            </View>
          </View>
          <View style={styles.leftIconsContainer}>
            <FeatherIcon style={styles.icon} name="plus" size={25} />
            <FeatherIcon
              style={[styles.icon, { marginLeft: 5 }]}
              name="send"
              size={22}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  row: { flexDirection: "row", flex: 1, alignItems: "center" },
  instagramTextLogoContainer: {},
  instagramTextLogo: {
    alignSelf: "flex-start",
    height: 40,
    width: 40 * 3,
  },
  leftIconsContainer: { flexDirection: "row" },
  icon: { padding: 5 },
});

export default Header;
