import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/abuja.png")}
      code={"abuja-electric"}
      disco={"Abuja Electricity Distribution Company (AEDC)"}
    />
  )
}

export default Index
