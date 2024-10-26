import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, RadioButton, FAB, List, Switch } from 'react-native-paper';

const AddReminderScreen = ({ navigation }:any) => {
  // Frases pré-definidas
  const phrases = [
    "Esteja presente no agora.",
    "Observe sua respiração.",
    "Relaxe os ombros e respire fundo.",
    "Acalme sua mente, sinta o momento.",
    "Volte sua atenção para o presente.",
  ];

  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [frequency, setFrequency] = useState('daily');
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const handleSaveReminder = () => {
    if (selectedPhrase) {
      // Aqui vai a lógica para salvar o lembrete (backend ou local)
      console.log('Lembrete salvo:', selectedPhrase, frequency, isNotificationEnabled);
      
      // Voltar para a tela principal após salvar
      navigation.goBack();
    } else {
      alert('Por favor, selecione uma frase.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Lembrete</Text>

      <Text style={styles.subTitle}>Selecione uma Frase</Text>
      {phrases.map((phrase, index) => (
        <List.Item
          key={index}
          title={phrase}
          left={() => (
            <RadioButton
              value={phrase}
              status={selectedPhrase === phrase ? 'checked' : 'unchecked'}
              onPress={() => setSelectedPhrase(phrase)}
            />
          )}
        />
      ))}

      <Text style={styles.subTitle}>Frequência</Text>
      <RadioButton.Group onValueChange={newValue => setFrequency(newValue)} value={frequency}>
        <View style={styles.radioOption}>
          <RadioButton value="daily" />
          <Text>Diário</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="weekly" />
          <Text>Semanal</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="custom" />
          <Text>Personalizado</Text>
        </View>
      </RadioButton.Group>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Ativar Notificações</Text>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
        />
      </View>

      <Button
        mode="contained"
        onPress={handleSaveReminder}
        style={styles.saveButton}
      >
        Salvar Lembrete
      </Button>

      <FAB
        style={styles.fab}
        icon="check"
        label="Salvar"
        onPress={handleSaveReminder}
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
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#6200ee',
  },
});

export default AddReminderScreen;