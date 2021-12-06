import React, { useEffect, useState } from 'react'
import {  Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import {styles as globalStyles} from '../theme/appTheme'

const ScreenWidth=Dimensions.get('window').width;

export const SearchScreen = () => {

    const {top}=useSafeAreaInsets();
    const {isFetching,simplePokemonList}=usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('');

    useEffect(() => {
       if (term.length===0) {
           return setPokemonFiltered([]);
       }

       console.log(isNaN(Number(term)))

       if (isNaN(Number(term))) {
           
           setPokemonFiltered(
               simplePokemonList.filter(
                   poke=>poke.name.toLowerCase()
                        .includes(term.toLocaleLowerCase())
                   )
           )
       }else{
           const pokemonById=simplePokemonList.find((poke)=>poke.id===term);
           setPokemonFiltered(
              (pokemonById)?[pokemonById]:[]
           )
       }
    }, [term])


    if (isFetching) {
      return(
          <Loading/>
      )
    }
    return (
        <View style={{
            flex:1, 
            //marginTop:(Platform.OS=='ios')?top:top+10,
            marginHorizontal:20
        }}>
            <SearchInput

                onDebounce={(value)=>setTerm(value)}

                style={{
                  position:'absolute',
                  width:ScreenWidth-40,
                  zIndex:999,
                    top:(Platform.OS=='ios')?top:top+30,
                }}
            /> 
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pokemonFiltered}
                    keyExtractor={(pokemon) => pokemon.id + pokemon.name}
                    renderItem={({ item, index }) => (
                        <PokemonCard
                            pokemon={item}
                        />
                    )}
                    //Numero de columnas en la flatlist
                    numColumns={2}

                    //Header
                    ListHeaderComponent={
                        (
                            <Text style={{
                                ...globalStyles.title,
                                ...globalStyles.globalMargin,
                                marginTop:(Platform.OS=='ios')?top+60:top+80,
                                paddingBottom:10

                            }}>
                                {term}
                            </Text>
                        )
                    }

                />
        </View>
    )
}

