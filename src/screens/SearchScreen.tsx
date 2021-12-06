import React from 'react'
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import {styles as globalStyles} from '../theme/appTheme'
export const SearchScreen = () => {

    const {top}=useSafeAreaInsets();
    const {isFetching,simplePokemonList}=usePokemonSearch();

    if (isFetching) {
        return (
        <View
            style={{
               ...styles.activityContainer
            }}
        >
            <ActivityIndicator size={50} color='grey'/>
            <Text>Cargando...</Text>
        </View>)
    }
    return (
        <View style={{
            flex:1, 
            marginTop:(Platform.OS=='ios')?top:top+10,
            marginHorizontal:20
        }}>
            <SearchInput/>
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
                                ...globalStyles.title,
                                ...globalStyles.globalMargin,
                                
                                paddingBottom:10

                            }}>
                                Pókedex
                            </Text>
                        )
                    }

                />
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer:{
        flex:1,
       // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})
