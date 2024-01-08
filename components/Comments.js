import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
export default function Comments({ id }) {
  const [comments, setComment] = useState([]);
  const [first, setFirst] = useState([]);
  const [clicked, onclicked] = useState(false);

  const getComments = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}/comments`);
      let data = await res.json();
      data = data.comments;
      setComment(data);
      setFirst(JSON.stringify(data[0], null, 2));
      // if (Array.isArray(data) && data.length > 0) {
      //   setFirst(data[0]); // Set the first object from the array to state
      // } else {
      //   setComment(data);
      // }
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => onclicked(!clicked)}
        style={{
          flex: 1,

          justifyContent: "space-between",
          maxWidth: "100%",
          backgroundColor: "#171D25",
          borderRadius: 20,
          padding: 10,
          marginBottom: 10,
        }}
      >
        {clicked ? (
          comments.map((com, index) => (
            <View
              key={index}
              style={{
                flexDirection:'row',
                maxWidth:'100%',
                backgroundColor: "#1B2838",
                marginBottom: 10,
                borderRadius: 15,
                padding: 10,
                position: "relative",
              }}
            >
              <Ionicons name="person-circle-sharp" size={20} color="white" />
              <View style={{flexDirection:'column', marginLeft:5}}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginRight: 5,
                      color: "white",
                    }}
                  >
                    {com.user.username}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 9,
                      fontWeight: "200",
                      paddingVertical: 7.8,
                    }}
                  >
                    comments
                  </Text>
                </View>

                <Text style={{ color: "white" }}>{com.body}</Text>
              </View>
            </View>
          ))
        ) : (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#1B2838",
              marginBottom: 10,
              borderRadius: 15,
              padding: 10,
            }}
          >
            <Ionicons name="person-circle-sharp" size={20} color="white" />
            <View style={{ flexDirection: "column", marginLeft: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontWeight: "bold", marginRight: 5, color: "white" }}
                >
                  {comments[0]?.user?.username}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 9,
                    fontWeight: "200",
                    paddingVertical: 7.8,
                  }}
                >
                  comments
                </Text>
              </View>

              <Text style={{ color: "white" }}>{comments[0]?.body}</Text>
            </View>
          </View>
        )}
        {clicked ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="chevron-up-outline" size={32} color="#1DA1F2" />
          </View>
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="chevron-down-outline" size={32} color="#1DA1F2" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
