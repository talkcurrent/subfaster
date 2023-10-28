import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CrossView from '../../reusables/CrossView'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'

const Index = () => {
    const theme = useTheme();
    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    // headerShown: true,
                    title: 'Profile'
                }} />

            <StatusBar
                animated={true}
                tintColor={theme.color}
                style={theme.statusBarTextColor}
            />
            <ScrollView
                contentContainerStyle={[styles.scrollView]}
                // StickyHeaderComponent={ () => { } }
                // stickyHeaderIndices={[0]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <Text style={{ color: theme.color }}>Notifications</Text>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {

    }
})