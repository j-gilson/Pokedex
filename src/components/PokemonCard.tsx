import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Pokemon } from "../types/Pokemon";

interface Props {
  pokemon: Pokemon;
  onPress: () => void;
}

export default function PokemonCard({ pokemon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 8,
    padding: 16,
    alignItems: "center",
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
