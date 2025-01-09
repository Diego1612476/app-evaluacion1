import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


export default function Pagina1Screen() {

const [nombreMascota, setnombreMascota] = useState('')
const [edad, setedad] = useState(0)
const [tipo, setTipo] = useState('')
const [nombreDueno, setnombreDueno] = useState('')

function registrar (){
  Alert.alert('Mascota: ${nombreMascota} Registrada correctamente');
}


function limpiar(){
  setnombreMascota('')
  setedad(0)
  setTipo('')
  setnombreDueno('')
}
  


  return (
    <View style={styles.container}>
      <Text style={styles.textT}>Registrar Mascota</Text>

      <TextInput
      style={styles.input}
      placeholder='Nombre de mascota'
      value={nombreMascota}
      onChangeText={setnombreMascota}
    />

      <TextInput
      style={styles.input}
      placeholder='Edad de mascota'
      keyboardType='numeric'
      value={edad.toString()}
      onChangeText={(texto) => setedad(+texto)}
    />

      <TextInput
      style={styles.input}
      placeholder='Tipo de mascota: Perro, gato, tortuga, hamster...'
      value={tipo}
      onChangeText={setTipo}
    />

      <TextInput
      style={styles.input}
      placeholder='Nombre del dueño'
      value={nombreDueno}
      onChangeText={setnombreDueno}
      />

      <Button title='Registrar' onPress={() => registrar()}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding:50,
    color: '#ffff'
    

  },
  textT:{
    fontSize:30,
    fontWeight: 'bold',
    marginBottom:20
  },
  input:{
    width:450,
    padding:20,
    fontSize:18,
    borderRadius:5,
    backgroundColor:'#62d596',
    marginVertical:10
  }
});