import { Meditation } from "./meditation.model";
import { Work } from "./work.model";

export interface Reminder{
    userUID: string;
    inscriptions: Work[];
    interval: number;
}