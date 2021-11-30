import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

const { width } = Dimensions.get('window');

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: width * 0.4
                }}
            >
                {/* Nombre del pokemon */}
                <Text style={{
                    ...styles.name
                }}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
                <View
                    style={
                        styles.pokebolaContainer
                    }
                >
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokebola
                    }}
                />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>

            {/*  */}


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right:-25,
        bottom:-25
       
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    },
    pokebolaContainer:{
        height:100,
        width:100,
        position:'absolute',
        bottom:0,
        right:0,
        overflow:'hidden',
        opacity:0.5
    }
})