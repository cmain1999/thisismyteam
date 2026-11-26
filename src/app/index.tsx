import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MatchCard } from '@/components/match-card';
import { NextMatchCard } from '@/components/next-match-card';
import { TeamHeader } from '@/components/team-header';
import { matches } from '@/data/matches';
import { useColors } from '@/hooks/use-colors';


// This file is `index.tsx`, so it's the first screen (the Matches tab).
export default function MatchesScreen() {
  const colors = useColors();

  return (
    // SafeAreaView keeps content clear of the notch and status bar.
    <SafeAreaView
      edges={['top']}
      style={[styles.container, { backgroundColor: colors.background }]}>
      {/*
        FlatList draws a scrolling list. We give it:
        - data: the array to show
        - keyExtractor: a unique id for each item, so React can track them
        - renderItem: what to draw for each item
      */}
      <FlatList
        data={matches}
        keyExtractor={(match) => match.id}
        renderItem={({ item }) => <MatchCard match={item} />}
        ListHeaderComponent={
          <View style={styles.header}>
          <TeamHeader teamName="Arsenal" />
          <NextMatchCard
            teamName="Arsenal"
            opponentName="Chelsea"
            kickoff="2023-10-15T15:00:00Z"
          />
          </View>
        }
        
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  header: {
    gap: 12,
  },
});
