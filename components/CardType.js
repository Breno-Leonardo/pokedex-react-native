
import { StyleSheet, Text, View } from "react-native";
import { getColor } from "../utils/utils";
  const CardType = ({ info }) => {
    return (
      <View style={styles.pokemonType} backgroundColor={getColor(info)}>
        <Text style={styles.pokemonTypeText}>
          {info.type.name.charAt(0).toUpperCase()+info.type.name.slice(1)}
        </Text>
      </View>
    );
  };
  export default CardType;
  
const styles = StyleSheet.create({
  
  pokemonType: {
    padding: 10,
    justifyContent:"center", 
    borderRadius: 100 , 
    marginBottom: 15,
    marginLeft: 10,
    shadowRadius: 10,
    borderWidth: 0.075,
    borderColor: "black",
    shadowColor: "  #000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00, 
    elevation: 10,
    
    
  },
  pokemonTypeText: {
    fontSize: 17,
    
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
});
