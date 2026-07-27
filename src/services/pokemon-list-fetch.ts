import type { PokemonListing, PokemonDetailed } from "../types/pokemon";


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
            image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
            url: item.url,
        };
    });

    

    return result;
}

export async function getPokemonDetails(pokemonURL: string): Promise<PokemonDetailed> {
    const response = await fetch(pokemonURL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message ?? "Failed to fetch pokemon information");
    }

    const result = data.map((item: any) => {
        return {
            name: item.name,
            id: item.id,
            image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`,
            cry_url: item.cries.latest,
            types: item.types.map((obj: any) => obj.type.name),
            stats: {
                hp: item.stats[0].base_stat,
                attack: item.stats[1].base_stat,
                defense: item.stats[2].base_stat,
                specialAttack: item.stats[3].base_stat,
                specialDefense: item.stats[4].base_stat,
                speed: item.stats[5].base_stat
            }
        }
    });

    return result;
    
}
