import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList, loadPokemos } = usePokemonPaginated();
    usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
            style={{
                alignItems:'center'
            }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={simplePokemonList}
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
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom:top+20,
                                paddingBottom:10

                            }}>
                                Pókedex
                            </Text>
                        )
                    }
                    //InfiniteScroll
                    onEndReached={loadPokemos}
                    onEndReachedThreshold={0.40}

                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color="grey"
                        />)}
                />
            </View>


        </>
    )
}
