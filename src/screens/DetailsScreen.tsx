import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>

      <Text style={styles.info}>Altura: {pokemon.height}</Text>
      <Text style={styles.info}>Peso: {pokemon.weight}</Text>

      <Text style={styles.info}>Tipos:</Text>
      {pokemon.types.map((t, index) => (
        <Text key={index}>🔹 {t.type.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: 180,
    height: 180,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
  },
  info: {
    fontSize: 20,
  },
});
