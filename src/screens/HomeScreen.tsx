import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/Pokemon";
import { api } from "../services/api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get("?offset=0&limit=20");

      const data: Pokemon[] = await Promise.all(
        response.data.results.map(async (item: any) => {
          const detail = await api.get(item.url);
          return {
            name: item.name,
            image: detail.data.sprites.front_default,
            height: detail.data.height,
            weight: detail.data.weight,
            types: detail.data.types,
          };
        })
      );

      setPokemons(data);
      setLoading(false);
    }

    loadPokemons();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate("Details", { pokemon: item })}
          />
        )}
      />
    </View>
  );
}
