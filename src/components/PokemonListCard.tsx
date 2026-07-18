import type { PokemonListing } from "../types/pokemon";
import "./PokemonListCard.css";

interface Listing {
    pokemon: PokemonListing
}

function PokemonListCard( {pokemon} : Listing ) {
    return (
        <div>
            <img src={pokemon.image_url}></img>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default PokemonListCard;