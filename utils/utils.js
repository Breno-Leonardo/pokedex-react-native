export function getColor(info) {//returns the color for a given pokemon type
    let color="blue";
    if (info.type.name == "grass") 
      color = "#7AC74C";
    else if (info.type.name == "fire") 
      color = "#EE8130";
    else if (info.type.name == "poison") 
      color = "#A33EA1"; 
    else if (info.type.name == "water") 
      color = "#6390F0"; 
    else if (info.type.name == "ice") 
      color = "#96D9D6";
    else if (info.type.name == "bug") 
      color = "#A6B91A";
    else if (info.type.name == "normal") 
      color = "#A8A77A";
    else if (info.type.name == "steel") 
      color = "#B7B7CE";
    else if (info.type.name == "fighting") 
      color = "#C22E28";
    else if (info.type.name == "ground") 
      color = "#E2BF65";
    else if (info.type.name == "fairy") 
      color = "#D685AD";
    else if (info.type.name == "psychic") 
      color = "#F95587";
    else if (info.type.name == "flying") 
      color = "#A98FF3";
    else if (info.type.name == "rock") 
      color = "#B6A136";
    else if (info.type.name == "electric") 
      color = "#F7D02C";
    else if (info.type.name == "ghost") 
      color = "#735797";
    else if (info.type.name == "dragon") 
      color = "#6F35FC";
    else if (info.type.name == "dark") 
      color = "#705746";
    return color;
    
   }
   
   export function getZeros(info) {//returns zeros in id number
    let zeros="";
    if(info.id>99){
      zeros=""
    }
    else if(info.id/10<1){
      zeros="00"
    }
    else if(info.id/10>1){
      zeros="0"
    }
    return zeros;
    
   }
  export function getFill(status) {
    let max= 160;
    return(status*130/max)
    
   }
   