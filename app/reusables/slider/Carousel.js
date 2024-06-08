import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Paginate from './Paginate';
import SlideItem from './SlideItem';

//device width and height
const { width, height } = Dimensions.get('screen');

const Carousel = ({ data }) => {

    const slideX = useRef(new Animated.Value(0)).current;
    const scrollerX = useRef();

    let slideIntval = useRef();

    useEffect(() => {
        setTimeout(() => {
            // to allow scrollerX.current mount and prevent undefined
            handleAutomation(1);
        }, 1000);
    }, []);

    const handleOnScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: slideX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false
            },
        )(event);
    };

    const viewabilityConfig = useRef({
        waitForInteraction: true,
        itemVisiblePercentThreshold: 50
    }).current;

    const handleAutomation = (index) => {
        clearInterval(slideIntval.current);
        slideIntval.current = setInterval(() => {

            if (scrollerX.current) {
                scrollerX.current.scrollToIndex({
                    animated: true,
                    index: index,
                });
                const isLastIndex = data[index + 1] === undefined;

                if (isLastIndex) {
                    handleAutomation(0);
                } else {
                    handleAutomation(index + 1);
                }
            } else {
                handleAutomation(1);
            }
        }, 5000);
    };

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    ref={scrollerX}
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => <SlideItem item={item} slideX={slideX} />}
                    ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
                    keyExtractor={item => item.id}
                    horizontal
                    snapToAlignment={"center"}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    onScrollToIndexFailed={() => { }}
                    viewabilityConfig={viewabilityConfig}
                />

            </View>
            <Paginate data={data} slideX={slideX} />
        </>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: height / 2,
    },
    list: {
        gap: 2
    },
});
