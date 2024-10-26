// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { TextInput, Button, Text, FAB } from 'react-native-paper';

// const AddChallengeScreen = ({ navigation }:any) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSaveChallenge = () => {
//     if (title && description) {
//       // Lógica para salvar o desafio (backend ou local)
//       console.log('Desafio salvo:', title, description);
      
//       // Voltar para a tela anterior após salvar
//       navigation.goBack();
//     } else {
//       alert('Por favor, preencha todos os campos.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Adicionar Desafio</Text>

//       <TextInput
//         label="Título"
//         value={title}
//         onChangeText={text => setTitle(text)}
//         mode="outlined"
//         style={styles.input}
//       />

//       <TextInput
//         label="Descrição"
//         value={description}
//         onChangeText={text => setDescription(text)}
//         mode="outlined"
//         multiline
//         numberOfLines={4}
//         style={styles.input}
//       />

//       <Button
//         mode="contained"
//         onPress={handleSaveChallenge}
//         style={styles.saveButton}
//       >
//         Salvar Desafio
//       </Button>

//       <FAB
//         style={styles.fab}
//         icon="check"
//         label="Salvar"
//         onPress={handleSaveChallenge}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 16,
//     backgroundColor: '#fff',
//   },
//   saveButton: {
//     marginTop: 20,
//   },
//   fab: {
//     position: 'absolute',
//     right: 16,
//     bottom: 16,
//     backgroundColor: '#6200ee',
//   },
// });

// export default AddChallengeScreen;