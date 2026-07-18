import { getList } from "./services/pokemon-list-fetch";
import type { PokemonListing } from "./types/pokemon";
import PokemonList from "./components/PokemonList";
import { useEffect, useState } from "react";
import "./App.css"


function App() {
    const [pokemon, setPokemon] = useState<PokemonListing[]>([]);

    useEffect(() => {
        async function loadPokemon() {
            const data = await getList();
            setPokemon(data);
        }

        loadPokemon();
    }, []);

    return (
        <div>
            <h1 className="title">Kanto Pokedex</h1>
            <PokemonList pokemon={pokemon} />
        </div>
    );
}

export default App;