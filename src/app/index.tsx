import { StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Club Tasks</Text>
      <TaskItem title="Installer Node.js" done={true} onToggle={() => {}} />
      <TaskItem title="Créer le projet Expo" done={false} onToggle={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 28, fontWeight: '700' },
});