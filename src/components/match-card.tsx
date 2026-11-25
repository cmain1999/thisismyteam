import { StyleSheet, Text, View } from 'react-native';

import type { Match } from '@/data/matches';
import { useColors } from '@/hooks/use-colors';

// "Props" are the inputs a component receives, like arguments to a function.
// This component needs one prop: the match it should display.
type MatchCardProps = {
  match: Match;
};

export function MatchCard({ match }: MatchCardProps) {
  const colors = useColors();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.header}>
        <Text style={[styles.competition, { color: colors.mutedText }]}>
          {match.competition}
        </Text>
        <StatusLabel match={match} />
      </View>

      <TeamRow name={match.homeTeam} score={match.homeScore} />
      <TeamRow name={match.awayTeam} score={match.awayScore} />
    </View>
  );
}

// Small components can live in the same file when only this file uses them.
function TeamRow({ name, score }: { name: string; score: number | null }) {
  const colors = useColors();

  return (
    <View style={styles.teamRow}>
      <Text style={[styles.teamName, { color: colors.text }]}>{name}</Text>
      {/* `??` means "if score is null, show a dash instead" */}
      <Text style={[styles.score, { color: colors.text }]}>{score ?? '–'}</Text>
    </View>
  );
}

function StatusLabel({ match }: { match: Match }) {
  const colors = useColors();

  if (match.status === 'live') {
    return <Text style={[styles.status, { color: colors.live }]}>● LIVE</Text>;
  }
  if (match.status === 'finished') {
    return <Text style={[styles.status, { color: colors.mutedText }]}>FT</Text>;
  }

  // Upcoming: show the kickoff day and time in the phone's local format.
  const kickoff = new Date(match.kickoff).toLocaleString(undefined, {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
  return <Text style={[styles.status, { color: colors.accent }]}>{kickoff}</Text>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  competition: {
    fontSize: 13,
    fontWeight: '600',
  },
  status: {
    fontSize: 13,
    fontWeight: '700',
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 17,
  },
  score: {
    fontSize: 17,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
});
