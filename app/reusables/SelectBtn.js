import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Animated, TextInput, View, Text, Modal, Pressable, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import useTheme from '../hooks/useTheme';
import SearchBar from './buttons/SearchBar';

const { width, height } = Dimensions.get('screen');

export default function SelectBtn(props) {
    const {
        text, style, handleInputChange, items,
    } = props;

    const [filteredItems, setFilteredItems] = useState(items);

    const [query, setquery] = useState("");
    const [showItems, setshowItems] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        // Check if searched text is not blank
        if (query) {
            // Inserted text is not blank
            // Filter the items and update setFilteredItems
            const newData = items.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item
                    ? item.toUpperCase()
                    : ''.toUpperCase();
                const textData = query.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            setFilteredItems(newData);
        } else {
            // Inserted text is blank
            // Update setFilteredItems with items
            setFilteredItems(items);
        }
    }, [query]);

    const onChangeText = (text) => {
        setquery(text);
    };

    return (
        <>
            <Pressable
                onPress={() => {
                    setshowItems(!showItems);
                }}
                style={{ ...style }}
            >
                <View
                    style={[styles.container, { backgroundColor: theme.cardBgc }]}
                >
                    {props.iconLeft ?
                        <View style={[styles.iconLeft, { color: theme.color }]} >
                            {props.iconLeft}
                        </View>
                        : <></>}
                    <View style={[styles.btnText, { color: theme.color }]}>
                        <Text style={{ color: theme.color }}>{text}</Text>
                    </View>
                    {props.iconRight ?
                        <View style={styles.iconRight}>
                            {props.iconRight}
                        </View>
                        : <></>}
                </View>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showItems}
                onRequestClose={() => {
                    setshowItems(!showItems);
                }}
            >
                <Pressable
                    style={[styles.centeredView]}
                    onPress={() => {
                        setshowItems(!showItems);
                    }}>
                    <Pressable style={[styles.modalView, { backgroundColor: theme.backgroundColor }]} >
                        <SearchBar
                            value={query}
                            onChangeText={onChangeText}
                            iconSize={19}
                            height={30}
                            placeholder={"Search list..."}
                        />
                        <FlatList
                            style={{ flexGrow: 0, maxHeight: 300 }}
                            data={filteredItems}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable
                                        style={{ padding: 6 }}
                                        onPress={() => {
                                            handleInputChange(item);
                                            setshowItems(!showItems);
                                            setquery("");
                                        }}
                                    >
                                        <Text style={{ color: theme.color }}>{item}</Text>
                                    </Pressable>
                                );
                            }}
                            ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
                            keyExtractor={item => item}
                            snapToAlignment={"center"}
                            pagingEnabled
                            showsVerticalScrollIndicator={false}
                        />
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: "center",
        paddingLeft: 5,
    },
    iconLeft: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    iconRight: {
        alignSelf: "center",
        // paddingLeft: 10,
        paddingHorizontal: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // outlineStyle: "none",
    },
    search: {
        flexDirection: "row"
    },
    modalView: {
        // margin: 20,
        borderRadius: 10,
        padding: 5,
        width: "80%",
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    btnText: {
        flexGrow: 2,
        flexShrink: 1,
        flexBasis: "auto",
        textAlign: "center",
    },
});