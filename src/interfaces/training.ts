export interface Training {
    id?: string,
    userId: string
    title: string,
    itens: Exercise [],
    level : Level
}

export interface Exercise {
    name:       string,
    desc:       string,
    rep:        number,
    set:        number,
    charge:     ChargeType,
}   

export enum ChargeType {
    LEVE, MODERADO, CONCENTRADO, EXCEDENTE
}

export enum Level {
    INICIANTE,INTERMEDIARIO,AVANÇADO
}