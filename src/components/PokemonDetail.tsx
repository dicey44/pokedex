import { type PokemonDetailed } from "../types/pokemon";
import "./PokemonDetail.css";


interface PokemonDetailProps {
    selectedPokemon: PokemonDetailed | null;
    closePokemonDetails: () => void; 
}


export default function PokemonDetail({ selectedPokemon, closePokemonDetails }: PokemonDetailProps) {

    if (selectedPokemon === null) {
        return null
    }

    return (
        <div className="backdrop">
            <div className="pokemon-detailed">
                <div className="pokemon-details-container">
                    <p className="details-title">{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)} ID#{selectedPokemon.id}</p>
                    <button onClick={closePokemonDetails}><span>X</span></button>
                    <img src={selectedPokemon.image_url} className="details-img"></img>
                    <audio controls className="details-audio">
                        <source src={selectedPokemon.cry_url} type="audio/ogg"></source>
                    </audio>
                    {selectedPokemon.types.map((type: string) => (
                        <span className={type.toLowerCase() + " details-type"} key={type.toLowerCase()}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    ))}
                    <div>
                        <span>Hp: </span>
                        <span>{selectedPokemon.stats.hp}</span>
                    </div>
                    <div>
                        <span>Attack: </span>
                        <span>{selectedPokemon.stats.attack}</span>
                    </div>
                    <div>
                        <span>Defense: </span>
                        <span>{selectedPokemon.stats.defense}</span>
                    </div>
                    <div>
                        <span>Special Attack: </span>
                        <span>{selectedPokemon.stats.specialAttack}</span>
                    </div>
                    <div>
                        <span>Special Defense: </span>
                        <span>{selectedPokemon.stats.specialDefense}</span>
                    </div>
                    <div>
                        <span>Speed: </span>
                        <span>{selectedPokemon.stats.speed}</span>
                </div>
            </div>
        </div>
        </div>
       
    )
}