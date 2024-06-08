import { Image } from 'expo-image';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Easing } from 'react-native';

const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease)
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease)
                })
            ])
        ).start();
    }, []);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <FadeInView>
                <Image
                    style={{
                        width: 100,
                        height: 60,
                    }}
                    source={require("../../assets/images/loader.png")}
                    contentFit="contain"
                    transition={1000}
                />
            </FadeInView>
        </View>
    );
};