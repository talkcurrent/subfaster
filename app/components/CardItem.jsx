import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme'
import { Link } from 'expo-router'
import { AllContext } from './contexts/AllPurposeContext'

const CardItem = (props) => {
  const { clientSettings } = useContext(AllContext)
  const theme = useTheme(clientSettings['nightMode'])
  return (
    props.href ?
      <Link href={props.href}>
        <View style={styles.munuIcon}>
          <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
            {/* items icon or image  */}
            {props.children}
          </View>
          <Text style={{ color: theme.color, fontSize: theme.fontSize }}>{props.label}</Text>
        </View>
      </Link>
      :
      <Pressable
        onPress={props.handlePress}
      >
        <View style={styles.munuIcon}>
          <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
            {/* items icon or image  */}
            {props.children}
          </View>
          <Text style={{ color: theme.color, fontSize: theme.fontSize }}>{props.label}</Text>
        </View>
      </Pressable>
  )
}

export default CardItem

const styles = StyleSheet.create({
  munuIcon: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
    padding: 5,
  },
})