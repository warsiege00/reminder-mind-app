

import { Work } from '@/core/models/work.model';
import { WORK_MOCK } from '@/core/services/work.service';
import { useState, useEffect } from 'react';


export const useWork = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorks = async () => {
    setLoading(true);
    try {
      const response = await new Promise<Work[]>(resolve =>
        setTimeout(() => resolve(WORK_MOCK), 1000)
      );
      setWorks(response);
    } catch (error) {
      console.error('Failed to fetch reminders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getWorkById = (id: string) => {
    return works.find(work => work.id === id);
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return { works, loading, getWorkById };
};

