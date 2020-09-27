import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

import { Header, ProgressiveImage } from "components";
const { width } = Dimensions.get("window");
const GRID_PADDING = 10;
const IMAGE_SIZE = (width - GRID_PADDING * 2) / 3;

const ExplorePageImage = ({ source, scale = 1 }) => {
  const size = IMAGE_SIZE * scale;
  return (
    <View style={{ height: size, width: size, padding: GRID_PADDING }}>
      <Image source={source} style={styles.exploreImage} />
    </View>
  );
};

const ExplorePage = props => {
  const [isBusy, setIsBusy] = useState(true);
  const [tags, setTags] = useState([
    "All",
    "IGTV",
    "Shop",
    "Travel",
    "Architecture",
    "Decor",
    "Art",
    "Food",
  ]);
  const [exploreItems, setExploreItems] = useState([]);

  useEffect(() => {
    fetchExploreItems();
  }, []);
  const fetchExploreItems = tag => {
    let query = tag;
    if (!query || query === "All") query = "instagram,people,happy";
    const url = `https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d&page=${1}?q=${tag}&per_page=30`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setExploreItems([...exploreItems, ...data.hits]);
        setIsBusy(false);
      })
      .catch(e => {
        console.log(e);
        setIsBusy(false);
        alert(JSON.stringify(e.message));
      });
  };

  const onTagPress = tag => {
    // fetchExploreItems(tag);
    // props.navigation?.navigate("exploreDetail", { tag });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <Header>
        <FeatherIcon name="search" size={25} style={styles.icon} />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search"
          style={styles.searchBar}
        />
        <AntDesign name="scan1" size={25} style={styles.icon} />
      </Header>
      <View>
        <ScrollView
          style={{ paddingHorizontal: 10, paddingBottom: 8 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {tags.map(tag => {
            return (
              <TouchableOpacity
                key={tag}
                onPress={() => onTagPress(tag)}
                style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            );
          })}
          <View style={{ marginHorizontal: 10 }} />
        </ScrollView>
      </View>
      <View style={styles.exploreItemsContainer}>
        <FlatList
          refreshing={isBusy}
          numColumns={3}
          ListHeaderComponent={
            <View style={{ flexDirection: "row" }}>
              <View>
                <ExplorePageImage
                  source={{ uri: exploreItems[0]?.previewURL }}
                />
                <ExplorePageImage
                  source={{ uri: exploreItems[1]?.previewURL }}
                />
              </View>
              <ExplorePageImage
                scale={2}
                source={{ uri: exploreItems[2]?.largeImageURL }}
              />
            </View>
          }
          data={exploreItems.slice(3)}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({ item, index }) => {
            console.log({ item });
            return <ExplorePageImage source={{ uri: item.previewURL }} />;
          }}
        />
      </View>
    </View>
  );
};

export default ExplorePage;
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
  exploreItemsContainer: {
    paddingHorizontal: GRID_PADDING,
    backgroundColor: "#fff",
  },
  exploreImage: {
    height: undefined,
    width: undefined,
    flex: 1,
    borderRadius: 10,
  },
});
