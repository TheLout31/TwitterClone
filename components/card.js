// Card.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Comments from "./Comments";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = ({ title, content, hashtags, commentsID }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={{ marginRight: 8 }}>
        <Ionicons name="person-circle-sharp" size={35} color="white" />
      </View>
      <View style={{ maxWidth: "85%" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.hashtagsContainer}>
          {hashtags.map((tag, index) => (
            <Text key={index} style={styles.hashtag}>
              #{tag}
            </Text>
          ))}
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
            marginBottom: 10,
          }}
        >
          Comments
        </Text>
        <Comments id={commentsID} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#1B2838",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 12,
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  hashtagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  hashtag: {
    marginRight: 5,
    color: "#1DA1F2",
  },
  reactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reaction: {
    fontSize: 16,
    color: "#333",
  },
});

export default Card;
