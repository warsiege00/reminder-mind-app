import { Work } from "./work.model";

export interface Meditation {
    id: string;
    title: string;
    description: string;
    source: string;
    work: string;
    tutorial: Tutorial[];
    moodRecommended: 'Ansioso' | 'Estressado' | 'Confuso' 
    | 'Grato' |'Inspirado';
}

export interface Tutorial {
    step: string
}