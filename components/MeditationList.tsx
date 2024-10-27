import React from 'react';
import { Meditation } from "@/core/models/meditation.model";
import { Link } from "expo-router";
import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Chip, Paragraph, Text } from "react-native-paper";

interface IMeditationList {
  meditations: Meditation[] | undefined;
}

export const MeditationList = ({ meditations }: IMeditationList) => {
  return (
    <View style={styles.container}>
      {meditations && meditations.length > 0 ? (
        <>
          <Text style={styles.title}>Meditações</Text>
          {meditations.map((item) => (
            <Card key={item.id} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Link
                  href={{
                    pathname: '/meditation/[id]',
                    params: { id: item.id, previousScreen: 'MoodChecker' },
                  }}
                  push
                >
                  <Text style={styles.meditationTitle}>{item.title}</Text>
                  {/* <Chip icon="information">{item.moodRecommended}</Chip> */}
                </Link>
              </Card.Content>
            </Card>
          ))}
        </>
      ) : (
        <Paragraph>Nenhuma meditação associada a este lembrete.</Paragraph>
      )}
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  cardContent: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  meditationTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});