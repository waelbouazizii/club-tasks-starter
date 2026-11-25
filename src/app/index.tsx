import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function Index() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Club Tasks</Text>
      <Text style={styles.subtitle}>Compteur : {count}</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Ajouter 1</Text>
      </Pressable>
      <TaskItem title="Comprendre useState" done={done} onToggle={() => setDone(!done)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#495057' },
  button: { backgroundColor: '#1f2430', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
});