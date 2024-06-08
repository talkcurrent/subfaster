import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Logo({ styleProp }) {
    return (
        <View>
            {/* <Image
                source={require("../../../assets/files/completelogo.png")}
                style={[styles.logoImage, styleProp]}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    logoImage: {
        objectFit: "contain",
        resizeMode: 'contain'
    },
});