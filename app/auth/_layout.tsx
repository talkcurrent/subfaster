import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Slot, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import useTheme from '../hooks/useTheme';

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
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        headerTintColor: theme.color,
        headerStyle: {
          backgroundColor: theme.stackHeaderBgc
        }
      }}
    >
      <Stack.Screen name="notifications/index" options={{ presentation: 'modal' }} />
      <Stack.Screen name="transactions/index" options={{ presentation: 'modal' }} />
      {/* telecoms */}
      <Stack.Screen name="telecoms/mtn" options={{ presentation: 'modal' }} />
      <Stack.Screen name="telecoms/airtel" options={{ presentation: 'modal', animationDuration: 100 }} />
      <Stack.Screen name="telecoms/etisalat" options={{ presentation: 'modal' }} />
      <Stack.Screen name="telecoms/glo" options={{ presentation: 'modal' }} />
      {/* tv subscriptions */}
      <Stack.Screen name="tv/dstv" options={{ presentation: 'modal' }} />
      <Stack.Screen name="tv/gotv" options={{ presentation: 'modal' }} />
      <Stack.Screen name="tv/startimes" options={{ presentation: 'modal' }} />
      {/*  */}
      <Stack.Screen name="updates/loginPin" options={{ presentation: 'modal' }} />
      <Stack.Screen name="updates/transactionPin" options={{ presentation: 'modal' }} />
      <Stack.Screen name="updates/personalInfo" options={{ presentation: 'modal' }} />
    </Stack>
  );

}
