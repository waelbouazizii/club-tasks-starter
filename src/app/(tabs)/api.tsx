import { StyleSheet, Text, View } from 'react-native';

export default function ImportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Importer des tâches</Text>
      <Text style={styles.subtitle}>Cet onglet sera complété à l'Étape 4.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#495057' },
});