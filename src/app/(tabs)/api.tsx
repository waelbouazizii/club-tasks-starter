import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTasks, type Task } from '../../context/TasksContext';

type Todo = { id: number; title: string; completed: boolean };
type Status = 'idle' | 'loading' | 'success' | 'error';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export default function ImportScreen() {
  const { importTasks } = useTasks();
  const [status, setStatus] = useState<Status>('idle');
  const [received, setReceived] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  async function loadTasks() {
    setStatus('loading');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const todos: Todo[] = await response.json();
      const newTasks: Task[] = todos.map((todo) => ({
        id: `api-${todo.id}`,
        title: todo.title,
        done: todo.completed,
      }));
      importTasks(newTasks);
      setReceived(newTasks.length);
      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Erreur inconnue');
      setStatus('error');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Importer des tâches</Text>
      <Text style={styles.subtitle}>Source : jsonplaceholder.typicode.com (données de test en latin)</Text>
      <Pressable
        style={[styles.button, status === 'loading' && styles.buttonDisabled]}
        onPress={loadTasks}
        disabled={status === 'loading'}
      >
        <Text style={styles.buttonText}>{status === 'error' ? 'Réessayer' : 'Importer 5 tâches'}</Text>
      </Pressable>
      {status === 'loading' && <ActivityIndicator size="large" />}
      {status === 'success' && (
        <Text style={styles.success}>
          {received} tâche(s) reçue(s). Les tâches déjà présentes ne sont pas ajoutées deux fois.
        </Text>
      )}
      {status === 'error' && <Text style={styles.error}>Échec du chargement : {errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#495057' },
  button: { backgroundColor: '#1f2430', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  success: { fontSize: 16, color: '#2f9e44' },
  error: { fontSize: 16, color: '#c92a2a' },
});