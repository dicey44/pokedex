import type { PokemonListing } from "../types/pokemon";
import PokemonListCard from "./PokemonListCard";

interface PokemonListProps {
    pokemon: PokemonListing[];
}

function PokemonList({ pokemon }: PokemonListProps) {
    return (
        <div>
            {pokemon.map((poke) => (
                <PokemonListCard 
                    key={poke.name}
                    pokemon={poke}
                />
            ))}
        </div>
    );
}

export default PokemonList;