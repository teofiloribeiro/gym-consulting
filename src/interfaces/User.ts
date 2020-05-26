export interface User {
    id?:        string;
    name:       string;
    email:      string;
    role:       UserRole;   
    birth:      Date;
}

export interface Login {
    email: string;
    password: string;
}

export enum UserRole {
    STUDENT = "STUDENT",
    INSTRUCTOR = "INSTRUCTOR",
    NUTRITIONIST = "NUTRITIONIST",
    PHYSIOTHERAPIST = "PHYSIOTHERAPIST",
    ADMIN = "ADMIN"
}