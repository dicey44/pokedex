import type { PokemonList } from "../types/pokemon";  

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

export async function getList(): Promise<PokemonList[]> {
    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message ?? "Failed to fetch list");
    }

    return data.results.map((item: any) => {
        return {
            name: item.name,
            imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.results.indexOf(item) + 1}.png` || "https://www.shutterstock.com/image-vector/image-not-found-failure-network-260nw-2330163829.jpg",
        }
    })

}

