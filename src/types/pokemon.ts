
export interface PokemonListing {
    name: string;
    image_url: string;
    url: string;
}

export interface PokemonDetailed {
    name: string;
    id: number;
    image_url: string;
    cry_url: string;
    types: [];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
}