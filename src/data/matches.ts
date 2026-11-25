// Fake match data so we can build screens before connecting a real API.
// Later, this will be replaced by data fetched from a football stats service.

// A "type" describes the shape of our data. TypeScript uses it to warn us
// if we misspell a field or forget one.
export type Match = {
  id: string;
  competition: string;
  kickoff: string; // date and time, in ISO format
  homeTeam: string;
  awayTeam: string;
  // Scores are `null` when the match hasn't been played yet.
  homeScore: number | null;
  awayScore: number | null;
  status: 'finished' | 'live' | 'upcoming';
};

export const matches: Match[] = [
  {
    id: '1',
    competition: 'Premier League',
    kickoff: '2026-11-22T15:00:00Z',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    status: 'finished',
  },
  {
    id: '2',
    competition: 'Premier League',
    kickoff: '2026-11-22T17:30:00Z',
    homeTeam: 'Liverpool',
    awayTeam: 'Manchester City',
    homeScore: 1,
    awayScore: 1,
    status: 'finished',
  },
  {
    id: '3',
    competition: 'La Liga',
    kickoff: '2026-11-25T20:00:00Z',
    homeTeam: 'Real Madrid',
    awayTeam: 'Sevilla',
    homeScore: 3,
    awayScore: 0,
    status: 'live',
  },
  {
    id: '4',
    competition: 'Serie A',
    kickoff: '2026-11-29T19:45:00Z',
    homeTeam: 'Inter',
    awayTeam: 'Juventus',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  {
    id: '5',
    competition: 'Bundesliga',
    kickoff: '2026-11-30T14:30:00Z',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
];
