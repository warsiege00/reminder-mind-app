import { useSession } from '@/contexts/AuthCtx';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function SettingsScreen() {
  const {signOut, error} = useSession();

  const handlePress = () => {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Setting </Text>
      <Button onPress={handlePress}>Sair</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
