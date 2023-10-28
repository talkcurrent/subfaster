import React from 'react';
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

const BtnSolidSuccess = (props) => {
    return (
        <Pressable
            style={ GlobalStyle.btn }
        >
            <TouchableOpacity style={ [styles.pressable, styles.solid] }>
                { props.children }
            </TouchableOpacity>
        </Pressable>
    );
};

export default BtnSolidSuccess;

const styles = StyleSheet.create({
    pressable: {
        padding: 8,
        borderRadius: 5,
    },
    solid: {
        backgroundColor: "#3c7a3d",
    },
});
