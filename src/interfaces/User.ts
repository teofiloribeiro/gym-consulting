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
    STUDENT,
    INSTRUCTOR,
    NUTRITIONIST,
    PHYSIOTHERAPIST
}