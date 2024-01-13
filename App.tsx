import React from "react";
import HomeScreen from "./src/assets/Screen/HomeScreen/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import CalculateScreen from "./src/assets/Screen/CalculateScreen/CalculateScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="CalculateScreen" component={CalculateScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;