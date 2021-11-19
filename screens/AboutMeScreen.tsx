import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About Me!</Text>
    </View>
  )
}

export default AboutMeScreen

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    padding: 10,
    backgroundColor: Colors.palette.background,
  }
})
