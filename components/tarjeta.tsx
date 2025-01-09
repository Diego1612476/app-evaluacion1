import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
  const { titulo, anio, descripcion, enlaces, detalles } = props.informacion;

  function detallesA() {
    Alert.alert(titulo, `Año: ${anio}\nDuración: ${detalles.duracion}\nDirector: ${detalles.director}`);
      
  }

  return (
      <TouchableOpacity style={styles.container} onPress={detallesA}>
      <Text style={styles.textoT}>{titulo}</Text>
        <View style={styles.info}>
            <Image source={{ uri: enlaces.image }} style={styles.imagen} />
            <Text style={styles.textoDescripcion}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: '#a43ad9',
    borderRadius: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    color: '#14021c'
  },
  imagen: {
    width: 120,
    height: 190,
    marginRight: 20,
    borderRadius: 5,
  },
  textoDescripcion: {
    fontSize: 22,
    color: '#0d0113',
    flex: 1,
  },
    textoT: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1d0628',
    fontWeight: 'bold',
  },
  
});
