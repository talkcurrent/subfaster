import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

const BtnSolidSuccess = (props) => {
    return (
        <Pressable
            style={GlobalStyle.btn}
        >
            <Pressable style={[styles.pressable, styles.solid]}>
                {props.children}
            </Pressable>
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
