import { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type UseStateHook<T> = [T | null, (value: T | null) => void];

// Alteração no hook para remover o booleano
function useAsyncState<T>(initialValue: T | null = null): UseStateHook<T> {
  return useReducer(
    (state: T | null, action: T | null = null): T | null => action,
    initialValue
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorageState(key: string): UseStateHook<string> {
  // Public
  const [state, setState] = useAsyncState<string>();

  // Get
  useEffect(() => {
    const loadStorageItem = async () => {
      let value: string | null = null;

      if (Platform.OS === 'web') {
        try {
          if (typeof localStorage !== 'undefined') {
            value = localStorage.getItem(key);
          }
        } catch (e) {
          console.error('Local storage is unavailable:', e);
        }
      } else {
        value = await SecureStore.getItemAsync(key);
      }
      setState(value);
    };

    loadStorageItem();
  }, [key]);

  // Set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}