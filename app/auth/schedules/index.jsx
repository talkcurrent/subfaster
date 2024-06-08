import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import CrossView from '../../reusables/CrossView'
import { AllContext } from '../../components/contexts/AllPurposeContext'
import useTheme from '../../hooks/useTheme'

const index = () => {
    const { clientSettings } = useContext(AllContext);
    const theme = useTheme(clientSettings['nightMode'])
    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    // headerTitle: () => <Ionicons name="ios-chevron-back" size={30} color="white" />,
                    title: 'Schedules/Subscriptions',
                    // headerLeft: () => <Ionicons name="ios-chevron-back" size={30} color="white" />
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

            </ScrollView>
        </CrossView>
    )
}

export default index

const styles = StyleSheet.create({})