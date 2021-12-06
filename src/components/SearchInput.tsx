import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

export const SearchInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar pokemón'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}

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
