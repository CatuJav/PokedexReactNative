import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);
    
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([])

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
    const loadPokemos=async ()=>{
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current= resp.data.next;
        mapPokemoList(resp.data.results)
        
    }

    const mapPokemoList = (pokemonList:Result[])=>{
        setIsLoading(true);
        const newPokemolist:SimplePokemon[]= pokemonList.map(({name,url})=>{
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length-2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return {id,picture,name,url}
        });
        setsimplePokemonList([...simplePokemonList,...newPokemolist]);
        setIsLoading(false);
    }
    useEffect(() => {
        loadPokemos();
    }, [])

    return{
        isLoading,
        simplePokemonList,
        loadPokemos
    }
    
}
