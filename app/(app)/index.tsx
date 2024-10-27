// components/ReminderList.tsx

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, FAB, Button } from 'react-native-paper';
import { useReminder } from '@/hooks/useReminders';
import { Loader } from '@/components/ui/Loader';
import { useWork } from '@/hooks/useWorks';
import { Link } from 'expo-router';
import ReminderInfo from '@/components/ReminderInfo';


const HomeScreen: React.FC = () => {
  const {reminder, loading} = useReminder();

  if (loading) {
    return <Loader />;
  }

  if(!reminder){
    return 
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seu Lembrete Conscientes</Text>
      {
        reminder ? 
          <ReminderInfo reminder={reminder} /> :
          <View>
            <Text>Nenhum lembrete configurado</Text>
            <Link href={{pathname: '/work'}}>
              <Button>Configurar</Button>
            </Link>
          </View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  reminderText: {
    fontSize: 18,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#6200ee',
  }
});

export default HomeScreen;