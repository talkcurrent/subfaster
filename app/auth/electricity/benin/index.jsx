import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/benin.png")}
      code={"benin-electric"}
      disco={"Benin Electricity Distribution Company (BEDC)"}
    />
  )
}

export default Index