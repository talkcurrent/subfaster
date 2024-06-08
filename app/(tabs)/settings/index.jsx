import { ScrollView, StyleSheet, Switch, Text, Pressable, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CrossView from '../../reusables/CrossView'
import { Link, Stack, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import SelectBtn from '../../reusables/SelectBtn'
import GlobalStyle from '../../styles/GlobalStyle'
import { AllContext } from '../../components/contexts/AllPurposeContext'

const Index = () => {
    const { language, setlanguage, clientSettings, putClientSettings } = useContext(AllContext);

    const theme = useTheme(clientSettings['nightMode']);

    const [isEnabled, setIsEnabled] = useState(clientSettings['nightMode']);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        if (clientSettings['nightMode'] != isEnabled) {
            putClientSettings('nightMode', isEnabled)
        }
    }, [isEnabled])

    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Settings',
                    headerTintColor: theme.color,
                    headerStyle: {
                        backgroundColor: theme.backgroundColor
                    },
                    headerTitleAlign: 'center'
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
                <View style={[styles.container, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <View >
                        <View><Text style={{ color: theme.color }}>Theme: </Text></View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            <Text style={{ fontWeight: '600', color: theme.color }}>Night Mode</Text>
                            <View>
                                <Switch
                                    trackColor={{ false: '#767577', true: 'green' }}
                                    // thumbColor={isEnabled ? 'green' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View><Text style={{ color: theme.color }}>Prefered Language: </Text></View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            <Text style={{ fontWeight: '600', color: theme.color }}>English</Text>
                            <SelectBtn
                                value={language}
                                text={language}
                                handleInputChange={(value) => setlanguage(value)}
                                iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.color} />}
                                items={['Arabic', 'English', 'Hausa', 'Igbo', 'Yoruba',]}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.container, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: theme.color, width: '80%' }} >Login PIN:{" "}</Text>
                            <Pressable
                                onPress={() => router.push('/auth/updates/loginPin')}
                            >
                                <FontAwesome5 name={'edit'} size={18} color={theme.iconColor} />
                            </Pressable>
                        </View>
                        <Text style={{ color: theme.color, fontWeight: '700' }}>******</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: theme.color, width: '80%' }} >Transaction PIN:{" "}</Text>
                            <Pressable
                                onPress={() => router.push('/auth/updates/transactionPin')}
                            >
                                <FontAwesome5 name={'edit'} size={18} color={theme.iconColor} />
                            </Pressable>
                        </View>
                        <Text style={{ color: theme.color, fontWeight: '700' }}>****</Text>
                    </View>
                </View>
                <View style={[styles.container, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <Pressable onPress={() => router.replace('/login')}>
                        <Text style={{ color: theme.color }}>Logout</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    container: {
        gap: 20,
        padding: 10
    }
})