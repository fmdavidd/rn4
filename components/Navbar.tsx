import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Define las props del componente
interface NavbarProps {
  // Eliminamos la función onNotificationPress
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://robohash.org/120' }} // Cambia esto a tu imagen
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Lionel A. Messi</Text>
        <Text style={styles.subtitle}>jugador</Text>
      </View>
      {/* Eliminamos el ícono de notificaciones */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    padding: 30,
  },
  profileImage: {
    width: 63,
    height: 63,
    borderRadius: 99,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a0b0b',
  },
  subtitle: {
    fontSize: 16,
    color: '#4a0b0b',
  },
});

export default Navbar;
