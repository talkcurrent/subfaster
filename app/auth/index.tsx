import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import CrossView from '../../app/reusables/CrossView';
import useTheme from '../hooks/useTheme';
import { Image } from 'expo-image';
import Footer from '../components/Footer';
import Schedule from '../components/Schedule';
import Telecoms from '../components/Telecoms';
import Finance from '../components/Finance';
import TVSubscriptions from '../components/TVSubscriptions';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  const theme = useTheme()

  return (
    <>
      <StatusBar
        animated={true}
        style={'light'}//always light here
      />
      <CrossView
        showFooter
        topImage={require("../../assets/images/stone-wall.jpeg")}
        gradientColors={['transparent', theme.backgroundColor, theme.backgroundColor, theme.backgroundColor]}
      >
        <Stack.Screen
          options={{
            headerShown: false,
            // headerLeft: () => <Ionicons name="ios-chevron-back" size={30} color="white" />
          }} />

        <ScrollView
          contentContainerStyle={[styles.scrollView]}
          // StickyHeaderComponent={ () => { } }
          stickyHeaderIndices={[0]}
          onScroll={() => { }}
          scrollEventThrottle={1}
        >

          <View style={styles.imgContainer}>
            <View style={styles.top}>
              <View>
                <FontAwesome name="user-circle" size={33} color={theme.iconColor} />
              </View>
              <ScrollView
                // style={styles.scrollView}
                contentContainerStyle={{}}
                scrollEventThrottle={1}
                horizontal={true}
              >
                <Link href={"/auth/profile"} asChild>
                  <Text style={styles.userName}>Enyoojo Akoh Blessed</Text>
                </Link>
              </ScrollView>
              <TouchableOpacity onPress={() => router.push('/auth/notifications')}>
                <FontAwesome name="bell" size={30} color={theme.iconColor} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: theme.iconColor,
                height: 170,
                width: '90%',
                marginHorizontal: '5%',
                position: 'absolute',
                // opacity: 0.9,
                top: 80,//50 - image total height 
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}
            >
              <Finance />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Schedule />
            <Telecoms />
            <TVSubscriptions />
          </View>
        </ScrollView>
      </CrossView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {

  },
  imgContainer: {
    height: 230,
    marginBottom: 30,
  },
  top: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  }
});
