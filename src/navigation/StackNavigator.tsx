import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Pokemon } from "../types/Pokemon";

export type RootStackParamList = {
  Home: undefined;
  Details: { pokemon: Pokemon };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Pokedex" }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detalhes do Pokémon" }} />
    </Stack.Navigator>
  );
}
