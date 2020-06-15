export interface UserMeasures {
    id?: string;
    userId?: string;
    dateTimeCreation: Date;
    weight: number;
    height: number;
}


export enum MeasuresType {
    WEIGHT = "WEIGHT",
    HEIGHT = "HEIGHT"
}