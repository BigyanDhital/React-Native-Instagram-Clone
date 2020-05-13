import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import LinearGradient from "react-native-linear-gradient";

const UserInfo = props => {
  let { userInfo } = props;
  console.log(userInfo);

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <LinearGradient
        style={{
          height: 100,
          width: 100,
          borderRadius: 200,
          padding: 3,
        }}
        colors={["#F88925", "#E5197E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View
          style={{
            padding: 2,
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 200,
          }}>
          <Image
            source={{ uri: userInfo.profileImage }}
            style={{
              height: undefined,
              width: undefined,
              flex: 1,
              padding: 5,
              backgroundColor: "#fff",
              borderRadius: 200,
            }}
          />
        </View>
      </LinearGradient>
      <View style={{ paddingTop: 20, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.userName}>James Hardem</Text>
          <Octicons name="verified" color="red" />
        </View>
        <Text style={styles.userBio}>Athletic</Text>
      </View>
      <View style={styles.userStatsContainer}>
        <View style={styles.userStat}>
          <Text style={styles.statNumber}>785</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.userStat}>
          <Text style={styles.statNumber}>10.2M</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.userStat}>
          <Text style={styles.statNumber}>223</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.userActionsContainer}>
        <View style={styles.followButton}>
          <TouchableOpacity style={{}}>
            <LinearGradient
              style={{
                paddingVertical: 12,
                paddingHorizontal: 70,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
              colors={["#F88925", "#E5197E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text style={styles.followButtonText}>Follow</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.messageButton}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
              backgroundColor: "#eee",
              borderRadius: 10,
              marginHorizontal: 10,
            }}>
            <FeatherIcon name="send" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontWeight: "800",
    fontSize: 17,
    paddingBottom: 3,
    paddingHorizontal: 8,
  },
  userBio: { fontWeight: "500", color: "#888" },
  userStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  userStat: { flex: 1, justifyContent: "center", alignItems: "center" },
  statNumber: {
    fontSize: 18,
    fontWeight: "800",
  },
  statLabel: {
    fontWeight: "bold",
    paddingTop: 2,
    color: "#888",
  },
  userActionsContainer: { flexDirection: "row", marginVertical: 20 },
  followButtonText: { fontSize: 16, fontWeight: "500", color: "#fff" },
});
export default UserInfo;
