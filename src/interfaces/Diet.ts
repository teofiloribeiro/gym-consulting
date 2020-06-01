export interface Diet {
    id?: string,
    userId: string
    title: string,
    itens: DietItem []
}

export interface DietItem {
    time: string,
    desc:       string,
    nutrient:   Nutrient,
    qty :       number,
    measure:       Measure,
}

export enum Measure {
    KG, G, MG, L, ML
}

export enum Nutrient {
    CARBOIDRATO,
    PROTEINA,
    CALCIO,
    GORDURA,
    VITAMINA,
    FIBRA
}