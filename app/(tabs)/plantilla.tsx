import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Navbar from '@/components/Navbar';
import * as Notifications from 'expo-notifications';

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
    requestNotificationPermissions();
  }, []);

  const requestNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        Alert.alert('Error', 'Se requieren permisos de notificación para recibir actualizaciones.');
      } else {
        registerForPushNotificationsAsync();
      }
    } else {
      registerForPushNotificationsAsync();
    }
  };

  const registerForPushNotificationsAsync = async () => {
    try {
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      setExpoPushToken(token);
      console.log('Expo Push Token:', token);
    } catch (error) {
      console.error('Error obteniendo el token de notificación:', error);
    }
  };

  const sendPushNotification = async () => {
    if (!expoPushToken) {
      Alert.alert('Error', 'No se pudo obtener el token de notificación.');
      return;
    }

    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Notificación desde Home',
      body: '¡Tienes una nueva notificación!',
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    Alert.alert('Notificación Enviada', 'La notificación ha sido enviada.');
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.title}>Inicio</Text>
        <TouchableOpacity onPress={sendPushNotification} style={styles.notificationButton}>
          <Text style={styles.buttonText}>Enviar Notificación</Text>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationButton: {
    backgroundColor: '#4a0b0b',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
