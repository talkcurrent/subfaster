import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/kedco.png")}
      code={"kano-electric"}
      disco={"Kano Electricity Distribution Company (KEDCO)"}
    />
  )
}

export default Index