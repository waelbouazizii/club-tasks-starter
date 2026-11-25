import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import TaskItem from '../../components/TaskItem';
import Clock from '../../components/Clock';
import { useTasks } from '../../context/TasksContext';

export default function Index() {
  const { tasks, addTask, toggleTask } = useTasks();
  const [text, setText] = useState('');

  const remaining = tasks.filter((t) => !t.done).length;

  function handleAdd() {
    const title = text.trim();
    if (title === '') return;
    addTask(title);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Club Tasks</Text>
      <Clock />
      <Text style={styles.subtitle}>{remaining} tâche(s) restante(s)</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Nouvelle tâche"
          onSubmitEditing={handleAdd}
        />
        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(t) => t.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <TaskItem title={item.title} done={item.done} onToggle={() => toggleTask(item.id)} />
            </View>
            <Link href={{ pathname: '/task/[id]', params: { id: item.id } }} style={styles.link}>
              Détails
            </Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#495057' },
  inputRow: { flexDirection: 'row', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ced4da', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
  button: { backgroundColor: '#1f2430', paddingHorizontal: 16, justifyContent: 'center', borderRadius: 8 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  list: { gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  rowMain: { flex: 1 },
  link: { color: '#1c7ed6', fontSize: 16, fontWeight: '600', padding: 8 },
});