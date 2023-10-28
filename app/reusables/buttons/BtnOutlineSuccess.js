import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

const BtnOutlineSuccess = (props) => {
    return (
        <Pressable
            onPress={ props.handlePress }
            style={ GlobalStyle.btn }
        >
            <TouchableOpacity style={ [styles.pressable, styles.outline] }>
                { props.children }
            </TouchableOpacity>
        </Pressable>
    );
};

export default BtnOutlineSuccess;

const styles = StyleSheet.create({
    pressable: {
        padding: 8,
        borderRadius: 5,
    },
    outline: {
        backgroundColor: "transparent",
        borderColor: "#8bc23c",
        borderWidth: 1,
    },
});
