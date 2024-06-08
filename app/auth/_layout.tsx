import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Slot, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import useTheme from '../hooks/useTheme';
import { useContext, useEffect } from 'react';
import { AllContext } from '../components/contexts/AllPurposeContext';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { clientSettings, unAuthorized, gettingAuthUser, authUser } = useContext(AllContext)

  const theme = useTheme(clientSettings['nightMode']);

  return (
    !unAuthorized && authUser ?
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: false,
          headerTintColor: theme.color,
          headerStyle: {
            backgroundColor: theme.stackHeaderBgc
          }
        }}
      />
      : !gettingAuthUser && !authUser && unAuthorized ?
        <Redirect href={'/login/'} />
        :
        <Slot />
  );

}
