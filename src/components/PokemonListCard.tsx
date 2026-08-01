import type { PokemonListing } from "../types/pokemon";
import "./PokemonListCard.css";

interface Listing {
    pokemon: PokemonListing;
    onClick: (url: string) => void;
}

function PokemonListCard( {pokemon, onClick} : Listing ) {
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div className="list-card">
        <a onClick={() => onClick(pokemon.url)}>
            <img src={pokemon.image_url}></img>
            <p>{pokemonName}</p>
        </a>
        </div>
    )
}
 
export default PokemonListCard;