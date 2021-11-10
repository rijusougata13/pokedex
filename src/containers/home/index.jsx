import axios from 'axios';
import { useEffect, useState } from 'react';
import {home} from './styles';

import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import { PokemonList } from '../../components';

const Home=()=>{
    const [prevUrl,setPrevUrl]=useState("");
    const [nextUrl,setNextUrl]=useState("");
    const [currUrl,setCurrUrl]=useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemonList,setpokemonList]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        axios.get(currUrl).then(pokemon=>{
            setLoading(false);
            const data=pokemon.data;
            setPrevUrl(data.previous);
            setNextUrl(data.next);
            setpokemonList(data.results);
        })
    },[currUrl])

    const prevClick=()=>{
        if(prevUrl)
        setCurrUrl(prevUrl);
    }

   const  nextClick=()=>{
        if(nextUrl) 
        setCurrUrl(nextUrl);
    }

    return(
        <home.Wrapper>
            <BsArrowLeftCircleFill className="leftArrow" onClick={prevClick}/>
            <PokemonList pokemons={pokemonList} loading={loading} />
            <BsArrowRightCircleFill className="rightArrow" onClick={nextClick}/>
        </home.Wrapper>        
    )
}

export default Home;