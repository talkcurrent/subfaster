import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import CrossView from '../../reusables/CrossView'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import Finance from '../../components/Finance'
import { FontAwesome5 } from '@expo/vector-icons'
import GlobalStyle from '../../styles/GlobalStyle'

const Index = () => {
    const theme = useTheme()
    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Finance'
                }} />

            <StatusBar
                animated={true}
                style={theme.statusBarTextColor}
            />
            <ScrollView
                contentContainerStyle={[styles.scrollView]}
                // StickyHeaderComponent={ () => { } }
                stickyHeaderIndices={[1]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <View style={[styles.container, GlobalStyle.shadow, { width: '100%', backgroundColor: theme.iconColor }]}>
                    <TouchableOpacity
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Wallet ID:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>09066331761</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Balance:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>N1,500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Bonuses:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>N10</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 18 }}>
                        <TouchableOpacity
                            style={[
                                GlobalStyle.shadow, styles.munuIcon,
                                { flex: 1, backgroundColor: theme.iconColor }
                            ]}
                            onPress={() => router.push('/auth/')}
                        >
                            <View style={[styles.iconContainer]}>
                                <FontAwesome5 name="plus" size={18} color={theme.touch} />
                            </View>
                            <Text style={{ color: 'white', fontSize: theme.fontSize }}>Add money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                GlobalStyle.shadow, styles.munuIcon,
                                { flex: 1, backgroundColor: theme.iconColor }
                            ]}
                            onPress={() => router.push('/auth/')}
                        >
                            <View style={[styles.iconContainer]}>

                            </View>
                            <Text style={{ color: 'white', fontSize: theme.fontSize }}>Send from balance</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: theme.backgroundColor }}>
                    <Text style={[GlobalStyle.bold, { color: theme.touch }]}>Transactions</Text>
                </View>
                <View style={[styles.container, { padding: 0, backgroundColor: theme.backgroundColor, width: '100%' }]}>
                    <View style={{ gap: 10 }}>
                        {/* list of transactions */}
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {
        padding: 10,
        gap: 15
    },
    container: {
        padding: 10,
        gap: 3,
        width: '100%'
    },
    btn: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 17
    },
    figure: {
        fontSize: 14,
        fontWeight: '800',
    },
    iconContainer: {
        borderBottomStartRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        padding: 5,
    },
    munuIcon: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
})