import { router } from 'expo-router';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card, Button, FAB } from 'react-native-paper';

const reminders = [
  { id: '1', text: 'Esteja presente agora.' },
  { id: '2', text: 'Observe sua respiração.' },
  { id: '3', text: 'Sinta seus pés no chão.' },
];

const Index = ({ navigation }: any) => {

  const renderReminder = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.reminderText}>{item.text}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Lembretes Conscientes</Text>

      <FlatList
        data={reminders}
        keyExtractor={item => item.id}
        renderItem={renderReminder}
        contentContainerStyle={styles.list}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        label="Adicionar Lembrete"
        onPress={() => router.push('/')}
      />
    </View>
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
  },
});

export default Index;