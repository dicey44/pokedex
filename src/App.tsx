import { getList } from "./services/pokemon-list-fetch";
import type { PokemonListing } from "./types/pokemon";
import PokemonList from "./components/PokemonList";
import { useEffect, useState} from "react";
import "./App.css"


function App() {
    const [pokemon, setPokemon] = useState<PokemonListing[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function loadPokemon() {
            const data = await getList();
            setPokemon(data);
        }

        loadPokemon();
    }, []);

    function handleSearchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    const filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(query.toLowerCase()));

    
    return (
        <div>
            <h1 className="title">Kanto Pokedex</h1>
            <input type="text" placeholder="Search Pokemon" className="search-bar" maxLength={25} value={query} onChange={handleSearchBar}></input>
            <PokemonList pokemon={filteredPokemon} />
            <h2 className={filteredPokemon.length === 0 ? "show center" : "hide"}>Pokemon not found</h2>
        </div>
    );
}

export default App;