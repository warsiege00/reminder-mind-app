// components/ReminderList.tsx

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Loader } from '@/components/ui/Loader';
import { useWork } from '@/hooks/useWorks';
import { useLocalSearchParams } from 'expo-router';
import { MeditationList } from '@/components/MeditationList';
import { Meditation } from '@/core/models/meditation.model';



const WorkDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const { getWorkById, loading} = useWork();
  const work = getWorkById(id as string);

 
  if (loading) {
    return <Loader />;
  }

  

  return (
    <ScrollView style={styles.container}>
      {
        work ? 
        <View>
          <Text style={styles.title}>{work.title}</Text>
          <Text>Autor: {work.autor}</Text>
          <Text>{work.description}</Text>
        </View> : <Text>Nenhuma obra encontrada.</Text>
      }
      {
        loading ? <Loader /> : (
            <MeditationList meditations={work?.meditations} />
        )
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

export default WorkDetailScreen;