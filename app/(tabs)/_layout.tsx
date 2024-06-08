import React, { useContext, useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Slot, Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

import useTheme from '../hooks/useTheme';
import { AllContext } from '../components/contexts/AllPurposeContext';
import setIntendedURL from '../components/setIntendedURL';
import { usePathname, useRouteInfo } from 'expo-router/build/hooks';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export default function TabLayout() {
  const { getauthUser, authUser, clientSettings, unAuthorized, gettingAuthUser } = useContext(AllContext);
  const theme = useTheme(clientSettings['nightMode'])

  const [path, setpath] = useState('/')
  const [localStorageResolved, setlocalStorageResolved] = useState(false)
  const [appRegistered, setappRegistered] = useState(false)

  const routeInfo = useRouteInfo();
  const pathname = usePathname();
  const value = useClientOnlyValue(false, true)

  const handleTabPress = () => {
    getauthUser()
  }

  useEffect(() => {
    if (path != pathname) {
      setpath(pathname)
    }
  })

  useEffect(() => {
    handleAppRegistered()
  }, []);

  useEffect(() => {
    setIntendedURL(routeInfo.pathname);
  }, [path])

  async function handleAppRegistered() {
    let registered
    if (Platform.OS === 'web') {
      registered = await AsyncStorage.getItem('sub-faster-registered');
    } else {
      registered = await SecureStore.getItemAsync('sub-faster-registered')
    }
    setappRegistered(registered != null)
    setlocalStorageResolved(true)
  }

  if (localStorageResolved) {
    if (!appRegistered) {
      return <Redirect href={'/welcome/'} />
    } else {
      return (
        !unAuthorized && authUser ?
          <Tabs
            screenListeners={{
              tabPress: handleTabPress
            }}
            screenOptions={{
              tabBarActiveTintColor: theme.iconColor,
              tabBarInactiveTintColor: theme.color,
              tabBarStyle: {
                backgroundColor: theme.backgroundColor,
              },
              // headerTransparent: true,
              // Disable the static render of the header on web
              // to prevent a hydration error in React Navigation v6.
              headerShown: value,
            }}>
            <Tabs.Screen
              name="index"
              options={{
                headerShown: false,
                title: 'Home',
                tabBarIcon: ({ color }) => <Entypo name="home" size={25} color={theme.iconColor} />,
                headerRight: () => <></>,
              }}
            />
            <Tabs.Screen
              name="profile/index"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome name="user-circle" size={25} color={theme.iconColor} />,
              }}
            />
            <Tabs.Screen
              name="finance/index"
              options={{
                title: 'Finance',
                tabBarIcon: ({ color }) => <FontAwesome name="money" size={25} color={theme.iconColor} />,
              }}
            />
            <Tabs.Screen
              name="support/index"
              options={{
                title: 'Support',
                tabBarIcon: ({ color }) => <AntDesign name="customerservice" size={20} color={theme.iconColor} />,
              }}
            />
            <Tabs.Screen
              name="settings/index"
              options={{
                title: 'Settings',
                tabBarIcon: ({ color }) => <FontAwesome5 name="cog" size={25} color={theme.iconColor} />,
              }}
            />
          </Tabs>
          : !gettingAuthUser && !authUser && unAuthorized ?
            <Redirect href={'/login/'} />
            :
            <Slot />
      );
    }
  } else {
    return null;
  }

}
