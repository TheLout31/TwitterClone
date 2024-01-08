import { StyleSheet, View, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import Card from "../components/card";
import { useEffect, useState } from "react";

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(2);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      let res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );
      let data = await res.json();
      data = data.posts;
      setPosts([...posts, ...data]);
      setLimit(limit);
      setSkip(skip + 2);
      setIsLoading(false);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

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
        onEndReached={getData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
