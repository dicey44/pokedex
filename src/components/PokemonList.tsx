import type { PokemonListing } from "../types/pokemon";
import PokemonListCard from "./PokemonListCard";
import "./PokemonList.css"

interface PokemonListProps {
    pokemon: PokemonListing[];
}

function PokemonList({ pokemon }: PokemonListProps) {
    return (
        <div className="grid">
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