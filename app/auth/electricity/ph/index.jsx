import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
  return (
    <CommonComponent
      logo={require("../../../../assets/images/phed.png")}
      code={"portharcourt-electric"}
      disco={"Port Harcourt Electricity Distribution Company (PHED)"}
    />
  )
}

export default Index