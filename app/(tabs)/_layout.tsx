import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>

      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF7F7F',
          tabBarInactiveTintColor: '#ffffff',
          tabBarStyle: {
            backgroundColor: '#3A0003',
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          },
          tabBarIconStyle: {
            marginBottom: -5,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="partidos"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'game-controller' : 'game-controller-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="torneos"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
