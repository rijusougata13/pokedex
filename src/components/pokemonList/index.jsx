import PokemonCard from '../pokemonCard';
import {pokemonList} from './styles';

const PokemonList=({pokemons,loading})=>{
    return(
        <pokemonList.Wrapper>
            {
                !loading?
                (pokemons?.map(pokemon=>{
                    return(
                        <PokemonCard key={pokemon.id} pokemonURL={pokemon}/>
                    )
                })):
                <h2>Loading...</h2>
            }
        </pokemonList.Wrapper>
    )
}

export default PokemonList;