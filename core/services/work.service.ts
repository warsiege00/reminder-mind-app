import { Work } from "../models/work.model";
import { MEDITATION_MOCK, MEDITATION_MOCK_2 } from "./meditation.service";

export const WORK_MOCK: Work[] = [
    {
        id: '1',
        title: 'Poder do Agora',
        description: 'Livro sobre Presença',
        meditations: MEDITATION_MOCK
    },
    {
        id: '2',
        title: 'Hábitos Atˆmicos',
        description: 'Livro sobre Habitos',
        meditations: MEDITATION_MOCK_2
    }
]
