
import { Meditation } from '@/core/models/meditation.model';
import { MEDITATION_MOCK } from '@/core/services/meditation.service';
import { useState, useEffect } from 'react';


export const useMeditations = () => {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMeditations = async () => {
    setLoading(true);
    try {
      const response = await new Promise<Meditation[]>(resolve =>
        setTimeout(() => resolve(MEDITATION_MOCK), 1000)
      );
      setMeditations(response);
    } catch (error) {
      console.error('Failed to fetch reminders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMeditationById = (id: string) => {
    return meditations.find(meditation => meditation.id === id);
  };

  const getAllRecommendedMeditationsByMood = (mood: string) => {
    return meditations.filter(meditation => meditation.moodRecommended === mood);
  }


  useEffect(() => {
    fetchMeditations();
  }, []);

  return { meditations, loading, getMeditationById, getAllRecommendedMeditationsByMood };
};

