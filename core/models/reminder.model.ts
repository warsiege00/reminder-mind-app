import { Meditation } from "./meditation.model";

export interface Reminder{
    userUID: string;
    title: string;
    meditations?: Meditation[] | null;
    interval: number;
}