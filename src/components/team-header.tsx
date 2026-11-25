import { useColors } from '@/hooks/use-colors';
import { StyleSheet, Text, View } from 'react-native';

type TeamHeaderProps = {
  teamName: string;
}; 

export function TeamHeader({teamName}: TeamHeaderProps) {
  const colors = useColors();

  return (
    <View style={[styles.header, {backgroundColor: colors.card}]}>
      <Text style={[styles.teamName, {color: colors.text}]}
      numberOfLines={1}
      adjustsFontSizeToFit
      minimumFontScale={0.5}>
        {teamName}
      </Text>
      {/*<View style={styles.logoContainer}>
        {/* <img src={teamLogoUrl} alt={`${teamName} logo`} style={styles.logo} />
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  teamName: {
    textAlign: 'center',
    fontSize: 64,
    fontWeight: '700',
    maxWidth: '80%',
  },
  logoContainer: {
    width: 50,
    height: 50,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});