import { PrimaryButton } from '@/components/primary-button';
import { useColors } from '@/hooks/use-colors';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NextMatchCardProps = {
  teamName: string;
  opponentName: string;
  kickoff: string; // ISO date string
};

export function NextMatchCard({ teamName, opponentName, kickoff }: NextMatchCardProps) {
  const colors = useColors();
  const [hasPredicted, setHasPredicted] = useState(false);

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
      <PrimaryButton
        title={hasPredicted ? 'Prediction saved ✓' : 'Predict Score'}
        onPress={() => setHasPredicted(true)}
        disabled={hasPredicted}
      />
      {hasPredicted && (
        <Text style={[styles.mostPredicted, { color: colors.mutedText }]}>
          Most Predicted Score: 2-1 (34% of fans)
        </Text>
      )}
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
    fontSize: 24,
    fontWeight: '700',
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8, // with the card's gap of 8, leaves 16 above the button
  },
  teamName: {
    fontSize: 24,
    fontWeight: '300',
    flexShrink: 1, // Allow text to shrink if it's too long
  },
  kickoff: {
    fontSize: 16
  },
  mostPredicted: {
    fontSize: 14,
    textAlign: 'center',
  },
}); 