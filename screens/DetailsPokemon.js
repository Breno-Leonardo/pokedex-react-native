import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import CardType from "../components/CardType";
import { getColor, getZeros ,getFill} from "../utils/utils";

  const DetailsPokemon = ({route}) => {
    return (
      <View style={styles.container} backgroundColor={getColor(route.params.item.types[0])}>

        <Text style={styles.pokemonTitle}>   
          {route.params.item.name.charAt(0).toUpperCase() + route.params.item.name.slice(1)+"#"+getZeros(route.params.item)+route.params.item.id}       
        </Text>

        <Image
                style={styles.pokemonSprite}
                source={{
                  uri: route.params.item.sprites.other["official-artwork"].front_default,
                }}
          />
          
        <View style={styles.containerPokemonInfos} >
        <ScrollView style={styles.scrollView}>
          <View style={styles.pokemonInfos}>
            <View style={styles.pokemonType} >
                      {route.params.item.types.map(info => 
                      <CardType info={info} key={Math.random()}></CardType>
                      )}    
            </View>
          </View>

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Height: {route.params.item.height}</Text>
          </View>
          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Weight: {route.params.item.weight}</Text>
          </View>         

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Hp: {route.params.item.stats[0].base_stat} </Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#7AC74C"} width={getFill(route.params.item.stats[0].base_stat)}></View>
            </View>
          </View> 

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Speed: {route.params.item.stats[5].base_stat} </Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#6390F0"} width={getFill(route.params.item.stats[5].base_stat)}></View>
            </View>
          </View>   

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Attack: {route.params.item.stats[1].base_stat}</Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#C22E28"} width={getFill(route.params.item.stats[1].base_stat)}></View>
            </View>
          </View>

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Defense: {route.params.item.stats[2].base_stat}</Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#E2BF65"} width={getFill(route.params.item.stats[2].base_stat)}></View>
            </View>
          </View> 

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Special Attack: {route.params.item.stats[3].base_stat}</Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#F95587"} width={getFill(route.params.item.stats[3].base_stat)}></View>
            </View>
          </View> 

          <View style={styles.pokemonInfos}>
            <Text style={styles.pokemonInfosText}>Special Defense: {route.params.item.stats[4].base_stat}</Text>
            <View style={styles.statusOut}>
              <View style={styles.statusIn} backgroundColor={"#735797"} width={getFill(route.params.item.stats[4].base_stat)}></View>
            </View>
          </View>
                      
                        
        </ScrollView>
        </View>
      </View>   
    );
   
  };
  export default DetailsPokemon;
  
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: "#fff",
      
  },
  pokemonTitle: {
    fontSize: 47,
    alignSelf: "center",
    marginTop: 50,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7
  },
  pokemonSprite: {
    width: 370,
    height: 300,
    alignSelf: "center",
    marginTop: 40,
    resizeMode: 'stretch',
  },
  containerPokemonInfos: {
    flex: 1,
    backgroundColor: "#fff", 
    resizeMode: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 30 , 
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
  pokemonType: {  
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
        alignItems: 'center',
    fontSize: 47, 
    marginTop: 20,
    marginBottom: 0,
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7
  },
  pokemonInfos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
            
    marginTop: 0,
    alignItems: 'center',
    marginBottom:7,
    resizeMode: 'stretch',
  },
  pokemonInfosText: {
    fontSize: 21,
    marginLeft: 20,
    alignSelf: 'center',
    color: '#2b2c28',
    
  },
  statusOut: {
    alignSelf: 'center',
    width: 130,
    backgroundColor:"black",
    justifyContent:"space-between", 
    borderRadius: 100 , 
    marginLeft: 10,
    marginRight: 30,
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
    elevation: 7,
    
    
  },
  statusIn: {
     width: 100,
    padding: 10,
    backgroundColor:"black",
    justifyContent:"flex-start", 
    borderRadius: 10 , 
  },
});
