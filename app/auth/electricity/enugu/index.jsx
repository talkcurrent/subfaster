import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/enugu.png")}
      code={"enugu-electric"}
      disco={"Enugu Electricity Distribution Company (ENEDC)"}
    />
  )
}

export default Index