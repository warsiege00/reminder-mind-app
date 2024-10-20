import { StyleSheet, Text, View } from 'react-native';
import { Redirect, router, Stack } from 'expo-router';
import { useSession } from '@/contexts/AuthCtx';
import { useEffect } from 'react';


export default function AppLayout() {
  const { session, isLoading, isFirstAccess } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return (
      <View style={styles.container}><Text>Loading...</Text></View>
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }


  useEffect(() => {
    console.log(`INdex APP: ${session}`)
    if(session && isFirstAccess){
      router.replace('/OnBoarding');
    }
  }, [session, isFirstAccess]);
  // });

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
