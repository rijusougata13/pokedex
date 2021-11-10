import { pokemonDetails } from "./styles";

const PokemonDetails=(props)=>{

    const pokemon=props.location.state;
    console.log(pokemon)
    return (
        <pokemonDetails.Wrapper>
            
         <pokemonDetails.Heading>{pokemon.species.name}</pokemonDetails.Heading>
                    
            <pokemonDetails.CardWrapper>
            
            <pokemonDetails.ImgWrapper>
                <div className="frontImg">
                    <img src={pokemon?.sprites?.front_default}/>
                </div>
                <div className="backImg">
                    <img src={pokemon?.sprites?.back_default}/>
                </div>
            </pokemonDetails.ImgWrapper>
            <pokemonDetails.DetailsWrapper>
                <pokemonDetails.PhysicalWrapper>
                    <span>
                        <h3>Height</h3>
                        <p>{pokemon.height}</p>
                    </span>
                    <span>
                        <h3>Weight</h3>
                        <p>{pokemon.weight}</p>
                    </span>
                    <span>
                        <h3>Base Expericene</h3>
                        <p>{pokemon.base_experience}</p>
                    </span>
                    
                </pokemonDetails.PhysicalWrapper>
                <pokemonDetails.Types>
              {
                  pokemon?.types?.map(type=>(
                    <span key={type.type.name} className={type?.type?.name}>{type?.type?.name}</span>      
                  ))
              }
                
            </pokemonDetails.Types>
            <pokemonDetails.Stats>
               {
                   pokemon?.stats?.map(data=>(
                       <span key={data?.stat?.name}><h3>{data?.stat.name}</h3>  &nbsp; : <p>{data.base_stat}</p></span>
                   ))
               }
            </pokemonDetails.Stats>
            </pokemonDetails.DetailsWrapper>
            </pokemonDetails.CardWrapper>
        </pokemonDetails.Wrapper>
    )
}

export default PokemonDetails;