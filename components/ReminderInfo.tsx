import React, { useState } from 'react';
import { Reminder } from '@/core/models/reminder.model';
import {StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import { useMeditations } from '@/hooks/useMeditations';

import { Loader } from './ui/Loader';
import { MeditationList } from './MeditationList';
import { scheduleNotification } from '@/core/services/notification.service';

interface IReminderInfo {
    reminder: Reminder
}

const ReminderInfo = ({ reminder }: IReminderInfo) => {
  const { meditations, loading } = useMeditations();
  const [interval, setInterval] = useState(reminder.interval);

  const handlePress = () => {

    const notificationContent = {
      title: "Hora de reconectar",
      body: "Bora exercitar a presença",
      data: {
        url: "notification/mood-checker", // Dado adicional que pode ser usado para navegação
      },
    }
    scheduleNotification(notificationContent, interval);
  }

  return (
    <View>
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.title}>{reminder.userUID}</Title>
                <Paragraph style={styles.userUID}>User ID: {reminder.userUID}</Paragraph>
                <Paragraph style={styles.interval}>Interval: {reminder.interval} minutes</Paragraph>
                <TextInput
                  label="Select Interval (minutes)"
                  value={String(interval)} // Converter para string para o TextInput
                  onChangeText={(value) => setInterval(Number(value))} // Atualiza o estado com o valor numérico
                  keyboardType="numeric" // Para garantir que o usuário insira apenas números
                  style={styles.input}
                />
                <Button onPress={handlePress}>Agendar</Button>
            </Card.Content>
        </Card>
        {
            loading ? <Loader /> : (
                <MeditationList meditations={meditations} />
            )
        }
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    borderRadius: 8,
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userUID: {
    fontSize: 14,
    marginBottom: 4,
    fontStyle: 'italic',
  },
  interval: {
    fontSize: 14,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  meditationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
  },
});

export default ReminderInfo;