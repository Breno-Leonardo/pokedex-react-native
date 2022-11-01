
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback } from "react-native";
import CardType from "./CardType";
import { getColor, getZeros } from "../utils/utils";
import * as RootNavigation from "./RootNavigation"
const cardPokemon = ({ item }) => { 
    return (
      <TouchableWithoutFeedback onPress={ () => RootNavigation.navigate("DetailsPokemon",
      {
        item:item
      }
      )}>

          <View style={styles.pokemonContainer} backgroundColor={getColor(item.types[0])} >
            <Text style={styles.pokemonTitle}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)+"#"+getZeros(item)+item.id}
            </Text>
            <View style={styles.pokemonRow}>
              <View style={styles.pokemonInfos} >
                {item.types.map(type => 
                <CardType info={type} key={Math.random()}></CardType>
                )}    
              </View>
              <Image
                style={styles.pokemonSprite}
                source={{
                  uri: item.sprites.other["official-artwork"].front_default,
                }}
              />
            </View>
          </View>
      
        </TouchableWithoutFeedback>
          
      
    );
   
  };
  export default cardPokemon;


  
const styles = StyleSheet.create({  
  pokemonContainer: {  
    flexDirection:"column",
    marginTop: 20 , 
    borderRadius: 30 , 
    marginLeft: 20,
    marginRight: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 10,
    borderWidth: 0.4,
    borderColor: "black",
  },

  pokemonInfos: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent:"center",
    marginLeft: 20,

   },

   pokemonRow: { 
    flexDirection:"row",
    justifyContent:"flex-end",
   }, 
  pokemonTitle: {
    fontSize: 40,
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft:30,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7
  },
  pokemonSprite: {
    width: 270,
    height: 200,
    resizeMode: 'stretch',
  },
  
});
