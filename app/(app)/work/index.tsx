import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { Loader } from '@/components/ui/Loader';
import { useWork } from '@/hooks/useWorks';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const WorkList: React.FC = () => {
  const { works, loading } = useWork();

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Todas as Obras</Text>
      {works.length > 0 ? (
        works.map((work) => (
          <View style={styles.cardWrapper} key={work.id}>
            <Card style={styles.cardContainer}>
              <Link
                href={{
                  pathname: '/work/[id]',
                  params: { id: work.id },
                }}
              >
                <View style={styles.cardContent}>
                  <Text style={{color: 'green', fontWeight: 'bold', padding: 10}}>Inscrito</Text>
                  <Text style={styles.workTitle}>{work.title}</Text>
                  <Text style={styles.workAuthor}>Autor: {work.autor}</Text>
                  <Text style={styles.workDescription}>{work.description}</Text>
                  {work.meditations ? (
                    <Text style={styles.meditationTitle}>Meditações {work.meditations.length}</Text>
                  ) : (
                    <Text style={styles.noMeditationsText}>Nenhuma meditação associada.</Text>
                  )}
                </View>
              </Link>
            </Card>
          </View>
        ))
      ) : (
        <Text style={styles.noWorkText}>Nenhuma obra encontrada.</Text>
      )}
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
  cardWrapper: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden', // Clipping overflow for rounded corners
  },
  cardContainer: {
    elevation: 2, // Shadow elevation for Android
    backgroundColor: '#FFF',
  },
  cardContent: {
    padding: 16,
  },
  workTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  workAuthor: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  workDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  meditationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  noMeditationsText: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
  noWorkText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default WorkList;