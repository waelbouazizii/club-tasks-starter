import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1f2430' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tâches',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={typeof color === 'string' ? color : undefined} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="api"
        options={{
          title: 'Importer',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="cloud-download-outline"
              color={typeof color === 'string' ? color : undefined}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}