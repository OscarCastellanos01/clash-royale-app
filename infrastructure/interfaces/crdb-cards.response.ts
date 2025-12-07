export interface ClashRoyaleDBResponse {
    items:        Item[];
    supportItems: SupportItem[];
}

export interface Item {
    name:               string;
    id:                 number;
    maxLevel:           number;
    maxEvolutionLevel?: number;
    elixirCost?:        number;
    iconUrls:           ItemIconUrls;
    rarity:             Rarity;
}

export interface ItemIconUrls {
    medium:           string;
    heroMedium?:      string;
    evolutionMedium?: string;
}

export enum Rarity {
    Champion = "champion",
    Common = "common",
    Epic = "epic",
    Legendary = "legendary",
    Rare = "rare",
}

export interface SupportItem {
    name:     string;
    id:       number;
    maxLevel: number;
    iconUrls: SupportItemIconUrls;
    rarity:   Rarity;
}

export interface SupportItemIconUrls {
    medium: string;
}
