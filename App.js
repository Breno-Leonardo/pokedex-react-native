import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import  Home  from "./screens/Home";
import  DetailsPokemon  from "./screens/DetailsPokemon";
import {navigationRef} from "./components/RootNavigation"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsPokemon" component={DetailsPokemon} options={{ headerShown: false }} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


