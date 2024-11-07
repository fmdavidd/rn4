import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Navbar from '@/components/Navbar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.content}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Torneos</Text>
          <Text style={styles.sectionLink}>ver todos</Text>
          <ScrollView horizontal>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.imgur.com/example.jpg' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Nombre Torneo</Text>
              <Text style={styles.cardDescription}>Descripción</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.imgur.com/example.jpg' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Nombre Torneo</Text>
              <Text style={styles.cardDescription}>Descripción</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipos</Text>
          <Text style={styles.sectionLink}>ver todos</Text>
          <ScrollView horizontal>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.imgur.com/example.jpg' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Nombre Equipo</Text>
              <Text style={styles.cardDescription}>Descripción</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://i.imgur.com/example.jpg' }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Nombre Equipo</Text>
              <Text style={styles.cardDescription}>Descripción</Text>
            </View>
          </ScrollView>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a0b0b',
  },
  sectionLink: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 14,
    color: '#4a0b0b',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 150,
    marginRight: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#4a0b0b',
  },
  cardDescription: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: '#555',
  },
});
