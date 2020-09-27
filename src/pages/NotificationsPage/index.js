import React from "react";
import { View, Text } from "react-native";
import { Header } from "components";

const NotificationsPage = () => {
  return (
    <View>
      <Header title="Activity" />
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ color: "#888", textAlign: "center", fontSize: 17 }}>
          No recent activity
        </Text>
      </View>
    </View>
  );
};

export default NotificationsPage;
