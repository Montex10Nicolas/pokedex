import React, { useState } from "react";

import { usePokemon } from "../richieste/usePokemon";
import { Link, useParams } from "react-router-dom";

import './Main.css';
import { Pokemon } from "../type/Pokemon";
import { ChangeGeneration } from "./ChangeGeneration";

export const All: React.FC = () => {
    const { gen } = useParams<{ gen: string }>();
    const list = usePokemon(parseInt(gen) - 1);
    const [shiny, setShiny] = useState<boolean[]>([]);

    const handleShiny = (index: number) => {
        const copy = [...shiny];
        copy[index] = !copy[index];
        setShiny(() => copy);
    }

    return (
        <div>
            <ChangeGeneration gen={gen} />
            <div className="main-container" >
                {
                    list && list.map((pokemon: Pokemon, index: number) => (
                        <div style={{ position: "relative" }}>
                            <button className="main-button-shiny" style={{ position: "absolute" }} onClick={() => handleShiny(index)}>Shiny</button>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <div key={`Main:${pokemon.id}`} className="main-box" >
                                    <div className="main-pokemon-sprite">
                                        <img alt={`immagine di ${pokemon.name}`}
                                            src={`https://img.pokemondb.net/sprites/home/${shiny[index] ? "shiny" : "normal"}/${pokemon.name}.png`} />
                                    </div>

                                    <div className="main-pokemon-info">
                                        <p>{pokemon.name}</p>
                                        <p>#{pokemon.id}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
