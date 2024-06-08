import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme'
import { AllContext } from '../components/contexts/AllPurposeContext';

export default function Logo({ fontSize }) {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: fontSize * 0.7, fontFamily: 'serif-bold', color: theme.iconColor }}>Sub</Text>
                <Text style={{ fontSize, fontFamily: 'serif-bold', color: theme.iconColor, fontStyle: 'italic' }}>Faster</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
    }
})