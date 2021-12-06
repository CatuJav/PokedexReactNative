import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([])

   
    const loadPokemos=async ()=>{
        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemoList(resp.data.results)
        
    }

    const mapPokemoList = (pokemonList:Result[])=>{
        const newPokemolist:SimplePokemon[]= pokemonList.map(({name,url})=>{
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length-2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return {id,picture,name,url}
        });
        setsimplePokemonList([...newPokemolist]);
        setIsFetching(false);
    }
    useEffect(() => {
        loadPokemos();
    }, [])

    return{
        isFetching,
        simplePokemonList,
        
    }
    
}
