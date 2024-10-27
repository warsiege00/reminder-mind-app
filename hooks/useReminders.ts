// hooks/useReminders.ts

import { useSession } from '@/contexts/AuthCtx';
import { Reminder } from '@/core/models/reminder.model';
import { useState, useEffect } from 'react';

export const useReminders = () => {
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [interval, setInterval] = useState<number>(5);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  

  const fetchReminders = async () => {
    setLoading(true);
    try {
      const response = await new Promise<Reminder[]>(resolve =>
        setTimeout(() => resolve(reminders), 1000)
      );
      setReminders(response);
    } catch (error) {
      console.error('Failed to fetch reminders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, [reminders]);

  return { reminders, loading };
};