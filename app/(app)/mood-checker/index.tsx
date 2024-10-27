import { MeditationList } from '@/components/MeditationList';
import { Meditation } from '@/core/models/meditation.model';
import { useMeditations } from '@/hooks/useMeditations';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const moodOptions = [
  { id: '1', label: 'Ansioso', icon: 'emoticon-sad', color: '#FF5733' }, // Vermelho
  { id: '2', label: 'Estressado', icon: 'emoticon-angry', color: '#C70039' }, // Escarlate
  { id: '3', label: 'Confuso', icon: 'emoticon-neutral', color: '#FFC300' }, // Amarelo
  { id: '4', label: 'Grato', icon: 'emoticon-happy', color: '#28A745' }, // Verde
  { id: '5', label: 'Inspirado', icon: 'emoticon-excited', color: '#007BFF' }, // Azul
];

const MoodChecker = () => {
  const [selectedMood, setSelectedMood] = useState<null | string>(null);
  const [recommendedMeditation, setRecommendedMeditation] = useState<null | Meditation[]>(null);
  const {getAllRecommendedMeditationsByMood} = useMeditations();

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood);
    console.log(mood)
    const data = getAllRecommendedMeditationsByMood(mood);
    setRecommendedMeditation(data);
    
  };

  

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Qual é o seu estado de espírito?</Title>
      <View style={styles.buttonContainer}>
        {moodOptions.map((mood) => (
          <Button
            key={mood.id}
            icon={() => <MaterialCommunityIcons name={mood.icon} size={24} color={mood.color} />}
            mode={selectedMood === mood.label ? 'contained' : 'outlined'}
            onPress={() => handleMoodSelect(mood.label)}
            style={[
              styles.button,
              {
                backgroundColor: selectedMood === mood.label ? mood.color : 'transparent',
                borderColor: mood.color,
              },
            ]}
            contentStyle={styles.buttonContent}
          >
            {mood.label}
          </Button>
        ))}
      </View>
      {selectedMood && (
        <Text style={styles.selectedMoodText}>
          Você selecionou: {selectedMood}
        </Text>
      )}
      {selectedMood && recommendedMeditation ? 
        <MeditationList meditations={recommendedMeditation} />
        : <Text>'Nenhuma meditação sugerida'</Text>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    borderRadius: 50, // Botões redondos
    width: 120, // Largura fixa
    borderWidth: 2, // Para garantir que a borda apareça em modo outlined
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedMoodText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default MoodChecker;