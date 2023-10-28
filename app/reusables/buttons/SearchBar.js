import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

const SearchBar = ({ value, onChangeText, iconSize, placeholder, height }) => {
    const theme = useTheme();

    return (
        <View style={[
            styles.container,
            { backgroundColor: theme.cardBgc, height }
        ]}>
            <TextInput
                style={[styles.input, { height, color: theme.color }]}
                value={value}
                placeholderTextColor={theme.grayed}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
            <View
                style={styles.searchBtn}
            >
                <FontAwesome name="search" size={iconSize} color={theme.grayed} />
            </View>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 30,
        borderWidth: 0.8,
        borderColor: "silver",
        paddingHorizontal: 10,
    },
    input: {
        flexGrow: 8,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        fontSize: 15,
        paddingTop: 5,
        padding: 5,
    },
    searchBtn: {
        flex: 1,
        margin: 5,
        justifySelf: "center",
        alignSelf: "center",
    }
});
