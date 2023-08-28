// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from "react";
import { View } from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link to={{ screen: "Details" }}>Home Screen</Link>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link to={{ screen: "Details" }}>Details Screen</Link>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
