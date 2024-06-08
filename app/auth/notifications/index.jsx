import { Image, ScrollView, StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import CrossView from '../../reusables/CrossView'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import { AllContext } from '../../components/contexts/AllPurposeContext'
import * as ImagePicker from 'expo-image-picker';

const Index = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Notifications',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: theme.backgroundColor
                    },
                    // headerBackground: () => <Image
                    //     style={{ width: '100%', height: 30, alignContent: 'center', justifyContent: 'center' }}
                    //     source={require("../../../assets/images/splash.png")}
                    //     contentFit="cover"
                    //     transition={1000}
                    // />,
                    // headerTransparent: true

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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {

    }
})