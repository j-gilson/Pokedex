import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }: any) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>

      <View style={styles.infoCard}>
        <Text style={styles.info}>Altura: {pokemon.height}</Text>
        <Text style={styles.info}>Peso: {pokemon.weight}</Text>

        <Text style={[styles.info, { marginTop: 10 }]}>Tipos:</Text>
        {pokemon.types.map((t: any, index: number) => (
          <Text key={index} style={styles.type}>
            🔹 {t.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF5350",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 15,
  },
  infoCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
    elevation: 5,
  },
  info: {
    fontSize: 18,
    fontWeight: "600",
  },
  type: {
    fontSize: 16,
    color: "#333",
  },
});
