import React from 'react';
import { Meditation } from "@/core/models/meditation.model";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Card, Chip, Paragraph, Text } from "react-native-paper";

interface IMeditationList {
  meditations: Meditation[] | undefined;
}

export const MeditationList = ({ meditations }: IMeditationList) => {
  return (
    <View style={styles.container}>
      {meditations && meditations.length > 0 ? (
        <>
          <Text style={styles.title}>Lista de Exercícios</Text>
          {meditations.map((item) => (
            <Card key={item.id} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Link
                  push
                  key={item.id}
                  href={{
                    pathname: '/meditation/[id]',
                    params: { id: item.id },
                  }}
                >
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.meditationTitle}>{item.title}</Text>
                    <View style={{display: 'flex', justifyContent: 'center'}}>
                      {/* <FontAwesome size={15} name="book" color={'grey'} /> */}
                      <Text style={styles.chip}>{item.work}</Text>
                    </View>
                  </View>
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
  chip: {
    color: 'grey', 
    fontWeight: 'bold', 
    fontStyle: 'italic',
    paddingVertical: 4,
    textAlign: 'center',
  }
});