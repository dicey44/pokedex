export interface Pokemon {
    name: string;
    image_url: string;
    cry_url: string; 
    types: {type: string}[];
    stats: {name: string, base_stat: number}[];
}

export interface PokemonList {
    name: string;
}[]