import { useColors } from '@/hooks/use-colors';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type TeamHeaderProps = {
  teamName: string;
}; 

export function TeamHeader({teamName}: TeamHeaderProps) {
  const colors = useColors();
  const teamLogoUrl = ''

  return (
    <View style={[styles.header, {backgroundColor: colors.card}]}>
    <Image source={require('@/assets/images/Arsenal_FC.png')} style={styles.logo}
    contentFit="contain" />
    <Text style={[styles.teamName, {color: colors.text}]}
    numberOfLines={1}
    adjustsFontSizeToFit
    minimumFontScale={0.5}>
    {teamName}
    </Text>
    <View style={styles.positionContainer}>
    <Text style={{color: colors.mutedText}}>Position:</Text>
    <Text style={{color: colors.accent}}>1st</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap:12,
    borderRadius: 16,
  },
  teamName: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '700',
    maxWidth: '80%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});