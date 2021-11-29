import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
export const HomeScreen = () => {

    const {top}=useSafeAreaInsets();
    const {isLoading,simplePokemonList, loadPokemos}=usePokemonPaginated();
    usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={simplePokemonList}
                keyExtractor={(pokemon)=>pokemon.id+pokemon.name}
                renderItem={({item,index})=>(
                    <FadeInImage
                        uri={item.picture}
                        style={{
                            width:100,
                            height:100
                        }}
                    />
                )}
                //InfiniteScroll
                 onEndReached={loadPokemos}
                 onEndReachedThreshold={0.40}

                ListFooterComponent={(
                <ActivityIndicator 
                    style={{height:100}}
                    size={20}
                    color="grey"
                />)}
            />
        
            {/* <Text style={{...styles.title,
                        ...styles.globalMargin,
                        top:top+20}}>
               Pókedex
            </Text> */}
        </>
    )
}
