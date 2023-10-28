import React from 'react';
import { SafeAreaView, View, Platform, StatusBar, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';
import Footer from '../components/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';


const CrossView = (props) => {
    const { gradientColors, topImage } = props
    const theme = useTheme();

    return (
        <>
            <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
                {topImage ?
                    <Image
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: 230,
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
                        source={topImage}
                        contentFit="cover"
                        transition={1000}
                    />
                    : <></>}
                {
                    Platform.OS === 'ios' ?
                        <SafeAreaView style={[styles.container, { backgroundColor: props.bgc }]}>
                            <LinearGradient
                                colors={gradientColors && gradientColors.length ? gradientColors : [theme.backgroundColor, theme.backgroundColor]}
                                style={{ flex: 1 }}
                            >
                                <View style={styles.container}>
                                    {props.children}
                                    {props.showFooter ?
                                        <Footer />
                                        : <></>}
                                </View>
                            </LinearGradient>
                        </SafeAreaView>
                        :
                        <View style={[styles.container, stylesAndroid.container, { backgroundColor: props.bgc }]}>
                            <LinearGradient
                                colors={gradientColors && gradientColors.length ? gradientColors : [theme.backgroundColor, theme.backgroundColor]}
                                style={{ flex: 1 }}
                            >
                                {props.children}
                                {props.showFooter ?
                                    <Footer />
                                    : <></>}
                            </LinearGradient>
                        </View>
                }
            </View>
        </>
    );
};

export default CrossView;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const stylesAndroid = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
});