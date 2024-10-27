import { Meditation } from "./meditation.model";
import { Work } from "./work.model";

export interface Reminder{
    id: string;
    userUID: string;
    inscriptions: Work[];
    interval: number;
}