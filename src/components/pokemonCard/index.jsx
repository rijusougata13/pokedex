import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { pokemonCard } from "./styles";

const PokemonCard=({pokemonURL})=>{
    const [pokemon,setPokemon]=useState({});
    const history = useHistory();
    useEffect(()=>{
        axios.get(pokemonURL?.url).then(data=>{
            setPokemon(data.data);
        })
    },[])
    return(
        <pokemonCard.Card onClick={e=>history.push({pathname:`pokemon/${pokemon.id}`,state:pokemon})}>
           <pokemonCard.ImgDiv>
            <pokemonCard.Img src={pokemon?.sprites?.front_default}/>
            </pokemonCard.ImgDiv>
            <pokemonCard.name>
                #{pokemon.id}
              <span>  {pokemon.name}</span>
             </pokemonCard.name>   
            <pokemonCard.Types>
              {
                  pokemon?.types?.map(type=>(
                    <span key={type.type.name} className={type?.type?.name}>{type?.type?.name}</span>      
                  ))
              }
                
            </pokemonCard.Types>
        </pokemonCard.Card>
    )
}

export default PokemonCard;