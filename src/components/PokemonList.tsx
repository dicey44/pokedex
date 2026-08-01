import type { PokemonListing } from "../types/pokemon";
import PokemonListCard from "./PokemonListCard";
import "./PokemonList.css"

interface PokemonListProps {
    pokemon: PokemonListing[];
    onClick: (url: string) => void;
}

function PokemonList({ pokemon, onClick }: PokemonListProps) {
    return (
        <div className="grid">
            {pokemon.map((poke) => (
                <PokemonListCard 
                    key={poke.name}
                    pokemon={poke}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}

export default PokemonList;