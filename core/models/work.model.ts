import { Meditation } from "./meditation.model";

export interface Work{
    id: string;
    title: string;
    description: string;
    meditations: Meditation[];
}