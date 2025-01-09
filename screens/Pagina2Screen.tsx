import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Tarjeta from '../components/tarjeta';
import datos from '../assets/data/peliculas2.json';

export default function Pagina2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PELICULAS</Text>
      <FlatList
        data={datos.peliculas} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => <Tarjeta informacion={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfb1f6',
    padding: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
