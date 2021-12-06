import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { PokemonDetails } from '../components/PokemonDetails'

import { usePokemon } from '../hooks/usePokemon'

import { RootStackParams } from '../navigator/Tab1'

//Para tener el tipado que va recibir
interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {

    //Desestructurar los params que vienen en el route
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,

            }}>
                {/* Back Boton */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backBotton,
                        top: top + 5
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={35} />

                </TouchableOpacity>
                {/* Nombre del Pokemón */}
                <Text style={{
                    ...styles.pokemonName,
                    textTransform:'capitalize',
                    top: top + 40
                }}>{name + '\n'} #{id}</Text>
                {/* Pokebola blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{ ...styles.pokeball }}
                />
                <FadeInImage
                    uri={picture}
                    style={{ ...styles.pokemonImage }}
                />
            </View>

            {/* Detalle y loading */}

            {isLoading ? <View style={
                {
                    ...styles.loadingIndicator
                }
            }><ActivityIndicator color={color}
                size={50} /></View>
                : <PokemonDetails pokemon={pokemon}/>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backBotton: {
        position: 'absolute',
        left: 20,

    },
    pokemonName: {
        fontSize: 40,
        alignSelf: 'flex-start',
        color: 'white',
        left: 20
    },
    pokeball: {
        height: 250,
        width: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        height: 250,
        width: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
)