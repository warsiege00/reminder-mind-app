// hooks/useReminders.ts

import { useSession } from '@/contexts/AuthCtx';
import { Reminder } from '@/core/models/reminder.model';
import { useState, useEffect } from 'react';

export const useReminder = () => {
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [interval, setInterval] = useState<number>(5);
  const [reminder, setReminder] = useState<Reminder>();
  

  const fetchReminders = async () => {
    setLoading(true);
    try {
      const response = await new Promise<Reminder>(resolve =>
        setTimeout(() => resolve(
          {
            inscriptions: [],
            interval: interval,
            userUID: session ? session : ''
          }), 1000)
      );
      setReminder(response);
    } catch (error) {
      console.error('Failed to fetch reminders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, [reminder]);

  return { reminder, loading };
};