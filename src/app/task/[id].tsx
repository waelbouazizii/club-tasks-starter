import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../../context/TasksContext';

export default function TaskDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tasks, toggleTask } = useTasks();
  const task = tasks.find((t) => t.id === id);

  if (task === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tâche introuvable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.status}>{task.done ? 'Terminée' : 'À faire'}</Text>
      <Pressable style={styles.button} onPress={() => toggleTask(task.id)}>
        <Text style={styles.buttonText}>{task.done ? 'Marquer à faire' : 'Marquer terminée'}</Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => router.back()}>
        <Text style={styles.secondaryText}>Retour à la liste</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: '700' },
  status: { fontSize: 16, color: '#495057' },
  button: { backgroundColor: '#1f2430', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  secondary: { paddingVertical: 12, alignItems: 'center' },
  secondaryText: { color: '#1c7ed6', fontSize: 16, fontWeight: '600' },
});