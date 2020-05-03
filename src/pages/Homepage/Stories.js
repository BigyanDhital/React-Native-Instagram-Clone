import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { images } from "../../assets";
const Story = props => {
  let { previewURL, image, download_url, largeImageURL } = props.story;
  console.log("previewURL ", previewURL);
  return (
    <TouchableOpacity style={styles.story}>
      {/* //   <View style={styles.border}> */}
      <Image
        //  source={{ uri: download_url }}
        source={image}
        style={styles.storyImage}
      />
      {/* //   </View> */}
    </TouchableOpacity>
  );
};

const Stories = () => {
  const [stories, setStories] = useState(images);
  const [page, setPage] = useState(2);
  useEffect(() => {
    // fetchAvatars();
  }, []);
  const fetchAvatars = () => {
    // const url = `https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d&page=${page}&per_page=3`;
    const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPage(page + 1);
        // setStories(data.hits);
        setStories(data);
      })
      .catch(e => {
        console.log(e);
        alert(JSON.stringify(e.message));
      });

    return null;
  };

  return (
    <View style={styles.storiesContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {stories.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    // height: 100,
    marginVertical: 20,
  },
  story: {
    height: 63,
    padding: 3,
    width: 63,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
  },
  // border: { borderWidth: 2, borderColor: "red", borderRadius: 50 },
  storyImage: {
    height: undefined,
    width: undefined,
    flex: 1,
    borderRadius: 50,
  },
});
export default Stories;
