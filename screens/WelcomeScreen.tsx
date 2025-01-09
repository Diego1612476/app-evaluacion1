import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation} : any) {
  return (
<ImageBackground
       source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/10271.jpg' }}
       style={ styles.container}
    >
     
     <Text style={styles.text}>Diego Carrion</Text>


      <Button title='INGRESAR'
      onPress={ () => navigation.navigate('Bottom')}
     />
    </ImageBackground>  
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        top: 20,
        fontSize: 48
    }
})