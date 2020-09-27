import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationAction } from "@react-navigation/core";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
const Header = props => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        {props.title && (
          <View style={styles.titleWrapper}>
            {props.goBack && (
              <TouchableOpacity onPress={props.goBack}>
                <FeatherIcon name="arrow-left" size={25} />
              </TouchableOpacity>
            )}
            {props.title && <Text style={styles.title}>{props.title}</Text>}
          </View>
        )}
        <View style={styles.container}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 10,

    flexDirection: "row",
    alignItems: "center",
    height: 55,
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
  titleWrapper: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontWeight: "bold", paddingHorizontal: 10, fontSize: 16 },
});

export { Header };
