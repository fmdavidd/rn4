import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Navbar from '@/components/Navbar';

export default function HomeScreen() {
  const torneos = [
    {
      id: 1,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
    {
      id: 2,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
    {
      id: 3,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
    {
      id: 4,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
    {
      id: 5,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
    {
      id: 6,
      nombre: 'Nombre Equipo',
      imagen: 'https://i.imgur.com/iAkWUrw.jpeg',
      descripcion: 'Descripción'
    },
  ];

  const TorneoCard = ({ torneo }: { torneo: typeof torneos[0] }) => (
    <TouchableOpacity style={styles.card}>
      <Image 
        source={{ uri: torneo.imagen }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{torneo.nombre}</Text>
        <Text style={styles.cardDescription}>{torneo.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.title}>Torneos</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {torneos.map((torneo) => (
            <TorneoCard key={torneo.id} torneo={torneo} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a0b0b',
  },
  content: {
    flex: 1,
    padding: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
  card: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 8,
    backgroundColor: 'rgba(74, 11, 11, 0.9)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#fff',
  },
});