import { useColors } from '@/hooks/use-colors';
import { StyleSheet, Text, View } from 'react-native';

type NextMatchCardProps = {
  teamName: string;
  opponentName: string;
  kickoff: string; // ISO date string
};

export function NextMatchCard({ teamName, opponentName, kickoff }: NextMatchCardProps) {
  const colors = useColors();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>Next Match</Text>
      <View style={styles.matchRow}>
        <Text style={[styles.teamName, { color: colors.text }]}>{teamName} vs {opponentName}</Text>
        <Text style={[styles.kickoff, { color: colors.mutedText }]}>
            {new Date(kickoff).toLocaleString(undefined, {
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit',
            })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
    matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  teamName: {
    fontSize: 24,
    fontWeight: '700',
    flexShrink: 1, // Allow text to shrink if it's too long
  },
  kickoff: {
    fontSize: 16
  },
}); 