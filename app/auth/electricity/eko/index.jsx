import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/ekoedc.png")}
      code={"eko-electric"}
      disco={"Eko Electricity Distribution Company (EKEDC)"}
    />
  )
}

export default Index