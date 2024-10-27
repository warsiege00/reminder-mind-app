import React from 'react';
import { Loader } from "@/components/ui/Loader";
import { useMeditations } from "@/hooks/useMeditations";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Card, Title, Paragraph, Chip } from "react-native-paper";

const MeditationDetailScreen = ({ navigation }: any) => {
    const { id } = useLocalSearchParams();
    const { getMeditationById } = useMeditations();

    // To get a meditation by ID
    const meditation = getMeditationById(id as string);

    return (
        <ScrollView style={styles.container}>
            {meditation ? (
                <>
                    <Title style={styles.title}>{meditation.title}</Title>
                    <View style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
                        <Text style={styles.chip}>Obra: {meditation.work}</Text>
                        <Text style={styles.mood}>Humor recomendado:</Text>
                        <Chip>{meditation.moodRecommended}</Chip>
                        
                    </View>
                    
                    <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Tutorial</Text>
                        {meditation.tutorial.map((step, index) => (
                            <Paragraph key={index} style={styles.tutorialStep}>
                                {index + 1}. {step.step}
                            </Paragraph>
                        ))}
                    </Card>
                    <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Sobre</Text>
                        <Paragraph style={styles.text}>{meditation.description}</Paragraph>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text style={styles.sectionTitle}>Fonte</Text>
                            <Paragraph style={styles.text}>{meditation.source}</Paragraph>
                        </Card.Content>
                    </Card>
                    
                </>
            ) : (
                <Loader />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        elevation: 4,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        marginBottom: 12,
        lineHeight: 22,
    },
    mood: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tutorialStep: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 4,
    },
    chip: {
        color: 'grey', 
        fontWeight: 'bold', 
        fontStyle: 'italic',
        paddingVertical: 4,
        textAlign: 'center',
    }
});

export default MeditationDetailScreen;