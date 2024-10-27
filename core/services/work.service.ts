import { Work } from "../models/work.model";
import { MEDITATION_MOCK, MEDITATION_MOCK_2 } from "./meditation.service";

export const WORK_MOCK: Work[] = [
    {
        id: '1',
        title: 'Poder do Agora',
        description: 'Livro sobre Presença',
        autor: 'Eckard Tolle',
        meditations: MEDITATION_MOCK
    },
    {
        id: '2',
        title: 'Hábitos Atômicos',
        description: 'Livro sobre Habitos',
        autor: 'James Clear',
        meditations: MEDITATION_MOCK_2
    }
]
