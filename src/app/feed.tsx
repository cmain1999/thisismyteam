import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '@/hooks/use-colors';

// Placeholder for the social feed. We'll build this out later.
export default function FeedScreen() {
  const colors = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Feed</Text>
      <Text style={{ color: colors.mutedText }}>Posts from fans will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
});
