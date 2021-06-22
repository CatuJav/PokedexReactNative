import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([])

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40')
    const loadPokemos=async ()=>{
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current= resp.data.next;
        mapPokemoList(resp.data.results)
        
    }

    const mapPokemoList = (pokemonList:Result[])=>{
        pokemonList.forEach(poke=>{
            console.log(poke.name);
        })
    }
    useEffect(() => {
        loadPokemos();
    }, [])

    
}
