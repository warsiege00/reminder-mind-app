// components/ReminderList.tsx

import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useReminders } from '@/hooks/useReminders';
import ReminderInfo from '@/components/ReminderInfo';
import { Loader } from '@/components/ui/Loader';


const ReminderScreen: React.FC = () => {
  const { reminder, loading} = useReminders();
 
  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seu Lembrete Conscientes</Text>
      {
        reminder ? <ReminderInfo reminder={reminder} /> : <Text>Nenhum lembrete encontrado.</Text>
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

export default ReminderScreen;