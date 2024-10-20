import { useSession } from '@/contexts/ctx';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const LoginScreen: React.FC = () => {
  const { signIn, isLoading, session } = useSession();
  const [email, setEmail] = useState('matheus@mail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      await signIn(email, password);
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  useEffect(() => {
    console.log(`Login - Session: ${session}`)
    console.log(`Login - IsLoading: ${isLoading}`)
    if (session && !isLoading) {
      console.log(`Entrou`)
      router.replace('/');
    }
  }, [session, isLoading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      <Button title="Não tem uma conta? Registre-se aqui." onPress={() => router.push('/register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;