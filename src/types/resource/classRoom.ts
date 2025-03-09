import { Student as StudentResource } from "./student";

export interface ClassRoom {
    id: string;
    name: string;
}

export interface Student {
    /** `0` for no group */
    groupId: number;
    /** `undefined` for empty seat */
    student?: StudentResource;
    /** not implement according to the spec, always be 0 */
    score: number;
    seatNumber: number;
}
