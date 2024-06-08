import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/ibadan.png")}
      code={"ibadan-electric"}
      disco={"Ibadan Electricity Distribution Company (IBEDC)"}
    />
  )
}

export default Index