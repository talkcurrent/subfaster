import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CrossView from '../../reusables/CrossView'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'

const Index = () => {
    const theme = useTheme();
    return (
        <CrossView >
            <Stack.Screen
                options={{
                    // headerShown: true,
                    title: 'Transactions'
                }} />

            <StatusBar
                animated={true}
                style={theme.statusBarTextColor}
            />
            <ScrollView
                contentContainerStyle={[styles.scrollView]}
                // StickyHeaderComponent={ () => { } }
                // stickyHeaderIndices={[0]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <Text>Transactions</Text>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {

    }
})