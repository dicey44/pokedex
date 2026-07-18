import type { PokemonListing } from "../types/pokemon";
import "./PokemonListCard.css";

interface Listing {
    pokemon: PokemonListing
}

function PokemonListCard( {pokemon} : Listing ) {
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div className="list-card">
            <img src={pokemon.image_url}></img>
            <p>{pokemonName}</p>
        </div>
    )
}
 
export default PokemonListCard;