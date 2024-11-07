import React, { useState } from 'react'; 
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState('https://robohash.org/120');
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se requieren permisos de cámara para cambiar la foto de perfil.');
    } else {
      openCamera();
    }
  };

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri); // Accede a la URI de la imagen seleccionada
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraIconContainer} onPress={requestCameraPermission}>
            <FontAwesome name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Lionel A. Messi</Text>
        <Text style={styles.role}>jugador</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>Siguiendo</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.adminPanelButton}>
          <Text style={styles.buttonText}>Panel Admin</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Estadísticas</Text>
        <View style={styles.statistics}>
          <Text style={styles.statistic}>Goles: 100</Text>
          <Text style={styles.statistic}>Asistencias: 100</Text>
          <Text style={styles.statistic}>Tarjetas rojas: 100</Text>
          <Text style={styles.statistic}>Tarjetas Amarillas: 100</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e3f3',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    right: -10,
    bottom: 0,
    backgroundColor: '#4a0b0b',
    borderRadius: 50,
    padding: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a0b0b',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#4a0b0b',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a0b0b',
  },
  statLabel: {
    fontSize: 14,
    color: '#4a0b0b',
  },
  adminPanelButton: {
    backgroundColor: '#4a0b0b',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a0b0b',
    marginBottom: 10,
  },
  statistics: {
    alignItems: 'center',
  },
  statistic: {
    fontSize: 16,
    color: '#4a0b0b',
    marginBottom: 5,
  },
});
