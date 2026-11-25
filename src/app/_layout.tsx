import { Stack } from 'expo-router';
import { TasksProvider } from '../context/TasksContext';

export default function RootLayout() {
  return (
    <TasksProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Club Tasks' }} />
        <Stack.Screen name="task/[id]" options={{ title: 'Détail de la tâche' }} />
      </Stack>
    </TasksProvider>
  );
}