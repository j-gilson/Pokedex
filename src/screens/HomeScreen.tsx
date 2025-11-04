import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { api } from "../services/api";
import { Pokemon } from "../types/Pokemon";

export default function HomeScreen({ navigation }: any) {
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
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={"#EF5350"} />
        <Text style={styles.loadingText}>Carregando Pokedex...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#EF5350",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "#555",
  },
});
