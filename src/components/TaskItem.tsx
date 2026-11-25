import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  done: boolean;
  onToggle: () => void;
};

export default function TaskItem({ title, done, onToggle }: Props) {
  return (
    <Pressable style={styles.row} onPress={onToggle}>
      <Text style={[styles.text, done && styles.done]}>
        {done ? '[x] ' : '[ ] '}
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { padding: 14, borderRadius: 8, backgroundColor: '#f1f3f5' },
  text: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#868e96' },
});