import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <Text style={styles.clock}>{now.toLocaleTimeString('fr-FR')}</Text>;
}

const styles = StyleSheet.create({
  clock: { fontSize: 14, color: '#868e96' },
});