import { router, Tabs } from 'expo-router';
import { useSession } from '@/contexts/AuthCtx';
import { FontAwesome } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNotificationObserver } from '../../hooks/useNotifications'

export default function AppLayout() {
  const { session } = useSession();
  console.log('entrou no (app)')
  console.log(session)
  useNotificationObserver();
  // // You can keep the splash screen open, or render a loading screen like we do here.
  // if (isLoading) {
  //   return (
  //     <View style={styles.container}><Text>Loading...</Text></View>
  //   );
  // }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  // if (!session) {
  //   // On web, static rendering will stop here as the user is not authenticated
  //   // in the headless Node process that the pages are rendered in.
  //   console.log('Redirect')
  //   return <Redirect href="/sign-in" />;
  // }


  // useEffect(() => {
  //   console.log(`INdex APP: ${session}`)
  //   // if(session && isFirstAccess){
  //   //   router.replace('/(app)/onboarding');
  //   // }
  // }, [session, isFirstAccess]);
  // });


  return  (
    
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="work/index"
        options={({ navigation }: NativeStackScreenProps<any>) => ({
          title: 'Obras',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        })}
      />
      <Tabs.Screen
        name="work/[id]"
        options={({ navigation }: NativeStackScreenProps<any>) => ({
          title: 'Detalhes da Obra',
          tabBarButton: () => null, // Prevents a tab button from rendering for this screen
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              onPress={() => router.push('/(app)/work')} // Allows navigating back
            />
          ),
        })}
      />
      <Tabs.Screen
        name="mood-checker/index"
        options={{
          title: 'Praticar',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="onboarding/index"
        options={{
          href: null,
        }}
      />
      
    
      <Tabs.Screen
        name="meditation/[id]"
        options={({ navigation }: NativeStackScreenProps<any>) => ({
          title: 'Detalhes da meditação',
          tabBarButton: () => null, 
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              onPress={() => {
                console.log(navigation.getState())
                // router.back();
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      
    </Tabs>
  )
}