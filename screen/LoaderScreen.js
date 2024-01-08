import { StyleSheet, View, Text,ActivityIndicator } from "react-native";
import React from "react";

export default function LoaderScreen({navigation}) {
    setTimeout(()=>{
        navigation.navigate('Home')
    },3000)
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>AulaCube</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2838",
  },
});
