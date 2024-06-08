import React, { useContext } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { AllContext } from '../../components/contexts/AllPurposeContext';

const { width, height } = Dimensions.get('screen');

const Paginate = ({ data, slideX }) => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])
    return (
        <View style={styles.container}>
            {data.map((val, key) => {
                const inputRange = [(key - 1) * width, key * width, (key + 1) * width];
                const dotWidth = slideX.interpolate({
                    inputRange,
                    outputRange: [12, 20, 12],
                    extrapolate: 'clamp'
                });

                const activeBgc = slideX.interpolate({
                    inputRange,
                    outputRange: ["transparent", theme.iconColor, "transparent"],
                    extrapolate: 'clamp'
                });

                return <Animated.View
                    key={key}
                    style={[
                        styles.page,
                        { borderColor: theme.iconColor, width: dotWidth, backgroundColor: activeBgc },
                    ]}
                    animatedValueX={slideX}
                />;
            })}
        </View>
    );
};

export default Paginate;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    page: {
        height: 12,
        width: 12,
        borderRadius: 6,
        borderWidth: 1,
        marginHorizontal: 3,
    },
});
