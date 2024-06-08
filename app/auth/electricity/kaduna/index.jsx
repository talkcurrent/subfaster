import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/kaduna.png")}
      code={"kaduna-electric"}
      disco={"Kaduna Electricity Distribution Company (KAEDCO)"}
    />
  )
}

export default Index