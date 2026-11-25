import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Club Tasks' }} />
      <Stack.Screen name="task/[id]" options={{ title: 'Détail de la tâche' }} />
    </Stack>
  );
}