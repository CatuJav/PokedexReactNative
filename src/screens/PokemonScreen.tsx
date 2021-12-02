import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/navigator'

//Para tener el tipado que va recibir
interface Props extends StackScreenProps<RootStackParams,'PokemonScreen'>{}

export const PokemonScreen = ({navigation,route}:Props) => {
    
    //Desestructurar los params que vienen en el route
    const {simplePokemon,color}=route.params;
    return (
        <View>
            <Text>{simplePokemon.name}-{color}</Text>
        </View>
    )
}
