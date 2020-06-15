export interface UserMeasures {
    id?: string;
    userId?: string;
    dateTimeCreation: Date;
    weight: number;
    height: number;
    waist: number;
    arm: number;
    chest: number
    thigh: number;
    calf: number;
}


export enum MeasuresType {
    WEIGHT = "WEIGHT",
    HEIGHT = "HEIGHT",
    WAIST = "WAIST",
    ARM = "ARM",
    CHEST = "CHEST",
    THIGH = "THIGH",
    CALF = "CALF"
}