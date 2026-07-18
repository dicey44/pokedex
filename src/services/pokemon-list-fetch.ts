import type { PokemonListing } from "../types/pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

export async function getList(): Promise<PokemonListing[]> {
    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message ?? "Failed to fetch list");
    }
    
    const result = data.results.map((item: any, index: number) => {
        return {
            name: item.name,
            image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
        };
    });

    return result;
}

