import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Brand({ styleProp }) {
    return (
        <View>
            <Text style={ { ...styles.logoText, ...styleProp } }>My Total Shop</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoText: {
        textAlign: "center",
    }
});