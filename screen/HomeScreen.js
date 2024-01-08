import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import Card from "../components/card";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/posts");
      let data = await res.json();
      data = data.posts;
      setPosts(data);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ paddingVertical: 20, backgroundColor: "#1B2838" }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            title={item.title}
            content={item.body}
            hashtags={item.tags}
            commentsID={item.userId}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
