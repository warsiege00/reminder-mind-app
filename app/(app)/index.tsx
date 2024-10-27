// components/ReminderList.tsx

import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { useReminder } from '@/hooks/useReminders';
import { Loader } from '@/components/ui/Loader';
import { useWork } from '@/hooks/useWorks';
import { Link } from 'expo-router';


const HomeScreen: React.FC = () => {
  const { works, loading} = useWork();

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seu Lembrete Conscientes</Text>
      {
        works && works.map((work) => {
          return (
            <Link 
              push
              key={work.id}
              href={{
                pathname: '/work/[id]',
                params: { id: work.id},
              }}>
              <Text key={work.id}>{work.title}</Text>
            </Link>)
        })
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