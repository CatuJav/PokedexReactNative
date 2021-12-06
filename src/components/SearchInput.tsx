import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/useDebounceValue'

interface Props{
    onDebounce:(value:string)=>void,
    style?:StyleProp<ViewStyle>,
}

export const SearchInput = ({style,onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue=useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue )
       console.log({debouncedValue})
    }, [debouncedValue])

   // console.log(textValue)

    return (
        <View style={{
            ...styles.container,
            ...style as any
            }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar pokemón'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}

                />
                <Icon
                    name="search-outline"
                    size={30}
                    color='grey'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex:99
        //backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top:2
    }
})
