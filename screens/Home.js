
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList} from "react-native";
import cardPokemon from "../components/CardPokemon";


const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=151&offset=0";
const pokemonPath = `${pokePath}${pokeQuery}`;

const Home = () => {
  const [pokemonDetails, setpokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonDetailsFetch = await fetch(pokemonPath);
      const pokemonIdsBody = await pokemonDetailsFetch.json();

      const pokemonDetails = await Promise.all(
        pokemonIdsBody.results.map(async (p) => {
          const pDetails = await fetch(p.url);

          return await pDetails.json();
        })
      );
      setpokemonDetails(pokemonDetails);
    };

    fetchPokemons();
  }, []);

  

  return (
    <View style={styles.container}>
      <FlatList data={pokemonDetails} renderItem={cardPokemon}  />
      <StatusBar style="auto" />
    </View>
  );
}
 
  

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    
  },
 
});
