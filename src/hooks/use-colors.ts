import { useColorScheme } from 'react-native';

// One place for all the app's colours, so screens stay consistent.
const palette = {
  light: {
    background: '#F2F2F7',
    card: '#FFFFFF',
    text: '#111111',
    mutedText: '#6B6B70',
    accent: '#1E9E50', // pitch green
    live: '#E5383B',
  },
  dark: {
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
    mutedText: '#9A9AA0',
    accent: '#34C759',
    live: '#FF453A',
  },
};

// A "hook" is a function starting with `use` that components can call.
// `useColorScheme` tells us whether the phone is in light or dark mode,
// and the screen redraws automatically if the user switches.
export function useColors() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? palette.dark : palette.light;
}
