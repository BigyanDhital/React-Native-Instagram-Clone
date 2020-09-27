import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Header } from "components";

export default function ExploreDetail(props) {
  const [tag, setTag] = useState(props.route?.params?.tag || "");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    getContent(tag);
  }, [page]);
  const getContent = () => {
    setIsBusy(true);
    const url = `https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d&page=${page}&per_page=20`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPage(p => p + 1);
        setContent([...content, ...data.hits]);
        setIsBusy(false);
      })
      .catch(e => {
        console.log(e);
        setIsBusy(false);
        alert(JSON.stringify(e.message));
      });
  };

  return (
    <View>
      <Header goBack={props.navigation.goBack} title={tag} />
      <View style={{ flex: 1 }}>
        {isBusy && <ActivityIndicator />}
        <Text>Content</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: { flex: 1, paddingHorizontal: 5, fontSize: 17 },
  icon: { padding: 5 },
  tag: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 13,
    marginHorizontal: 5,
  },
});
