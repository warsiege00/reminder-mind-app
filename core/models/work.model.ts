import { Meditation } from "./meditation.model";

export interface Work{
    id: string;
    title: string;
    description: string;
    autor: string;
    meditations: Meditation[];
}