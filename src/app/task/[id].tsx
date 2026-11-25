import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tâche n° {id}</Text>
      <Text style={styles.hint}>Cet écran ne connaît que l'identifiant : la liste des tâches est dans un autre écran.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: '700' },
  hint: { fontSize: 16, color: '#495057' },
});