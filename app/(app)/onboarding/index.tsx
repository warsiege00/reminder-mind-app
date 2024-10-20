import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Bem-vindo ao Reminder Mind App!</Title>
      <Image
        source={require('../../../assets/images/reminder-app-onboarding.png')} // Substitua pelo caminho da sua imagem
        style={styles.image}
        resizeMode="contain"
      />
      <Paragraph style={styles.paragraph}>
        O Reminder Mind App é o seu companheiro diário para ajudá-lo a estar presente e praticar mindfulness. 
        Receba lembretes inspiradores ao longo do dia e descubra o poder de estar no momento.
      </Paragraph>

      <View style={styles.benefitsContainer}>
        <Card style={styles.benefitCard}>
          <Card.Content>
            <Title>Lembretes Personalizados</Title>
            <Paragraph>Crie lembretes que ressoam com você.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.benefitCard}>
          <Card.Content>
            <Title>Mindfulness ao Longo do Dia</Title>
            <Paragraph>Pratique a atenção plena em sua rotina diária.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.benefitCard}>
          <Card.Content>
            <Title>Notificações Delicadas</Title>
            <Paragraph>Receba lembretes suaves nos momentos certos.</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('MainScreen')} // Navegue para a tela principal
        style={styles.button}
      >
        Iniciar
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('MainScreen')} // Navegue para a tela principal sem onboarding
        style={styles.skipButton}
      >
        Pular
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitsContainer: {
    width: '100%',
    marginBottom: 16,
  },
  benefitCard: {
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
    width: '100%',
  },
  skipButton: {
    marginTop: 8,
    width: '100%',
  },
});

export default OnboardingScreen;