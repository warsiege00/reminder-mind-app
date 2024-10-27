import { useSession } from '@/contexts/AuthCtx';
import { Reminder } from '@/core/models/reminder.model';
import { useState, useEffect } from 'react';

import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const useReminder = () => {
  const [loading, setLoading] = useState(true);
  const { session } = useSession();
  const [interval, setInterval] = useState<number>(5);
  const [reminder, setReminder] = useState<Reminder | null>(null);

  const fetchReminders = async () => {
    if (!session) {
      // console.warn('No user session available');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      // Fetch the reminder document for the current user
      const reminderRef = doc(db, 'reminders', session);
      const docSnapshot = await getDoc(reminderRef);

      if (docSnapshot.exists()) {
        setReminder({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        } as Reminder);
      } else {
        // If no reminder exists, create a default reminder document
        const newReminder: Reminder = {
          id: reminderRef.id, // Use the document ID as `id`
          inscriptions: [],
          interval: interval,
          userUID: session,
        };
        await setDoc(reminderRef, newReminder);
        setReminder(newReminder);
      }
    } catch (error) {
      console.error('Failed to fetch reminders:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch reminders and subscribe to updates on component mount and when session changes
  useEffect(() => {
    if (!session) return;

    const reminderRef = doc(db, 'reminders', session);
    const unsubscribe = onSnapshot(reminderRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setReminder({
          id: docSnapshot.id, 
          ...docSnapshot.data(),
        } as Reminder);
      }
    });

    return () => unsubscribe(); // Unsubscribe on cleanup
  }, [session]);

  useEffect(() => {
    fetchReminders();
  }, [interval]);

  return { reminder, loading, setInterval };
};