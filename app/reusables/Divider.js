import React from 'react';
import { View, Text } from 'react-native';

export default function Divider({ color, scale = 0.4, width }) {
    return <View style={{
        height: 1.5,
        width: width,
        backgroundColor: color,
        transform: [{ scaleY: scale }]
    }} />;
}
