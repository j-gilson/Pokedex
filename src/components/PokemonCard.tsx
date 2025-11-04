import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#EF5350",
  },
});
