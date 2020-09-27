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
import ViewStory from "./ViewStory";
const Story = props => {
  let { previewURL, largeImageURL, image, onClick } = props.story;
  return (
    <TouchableOpacity
      style={[styles.story, { borderColor: props.seen ? "#eee" : "red" }]}
      onPress={() => props.onClick()}>
      <Image source={{ uri: largeImageURL }} style={styles.storyImage} />
    </TouchableOpacity>
  );
};
let storyTimeout = null;

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(2);
  const [currentStory, setCurrentStory] = useState(null);
  const [seenStories, setSeenStories] = useState([]);
  useEffect(() => {
    fetchAvatars();
  }, []);
  useEffect(() => {
    // storyTimeout && clearTimeout(storyTimeout);
    if (!currentStory) return;
    let currentIndex = stories.findIndex(story => story.id === currentStory.id);
    if (currentIndex >= stories.length || currentIndex < 0) {
      closeStoryView();
      return;
    }
    storyTimeout = setTimeout(() => {
      selectStory(stories[currentIndex + 1]);
    }, 3000);
  }, [currentStory]);

  const selectStory = story => {
    setCurrentStory(story);
    story?.id && setSeenStories([...seenStories, story.id]);
  };
  changeStory = () => {};

  const closeStoryView = () => {
    storyTimeout && clearTimeout(storyTimeout);
    selectStory(null);
  };
  const fetchAvatars = () => {
    const url = `https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d&q=food,landscape&page=${page}&per_page=20`;
    // const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPage(page + 1);
        setStories(data.hits);
        // setStories(data);
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
        {stories.map((story, i) => {
          const seen = seenStories.includes(story.id);
          console.log({ seenStories, id: story.id, seen });
          return (
            <Story
              onClick={() => selectStory(story)}
              key={story.id}
              seen={seen}
              story={story}
            />
          );
        })}
      </ScrollView>
      {currentStory ? (
        <ViewStory
          story={currentStory}
          stories={stories}
          closeStoryView={closeStoryView}
          visible={!!currentStory}
        />
      ) : null}
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
    // borderColor: "red",
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
