import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>   
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#1B2838" }, headerTitleStyle:{ fontWeight:'bold', color:'white',} }}
      >
        <Stack.Screen name="Home" component={HomeScreen}  options={{title:'AulaCube.'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
