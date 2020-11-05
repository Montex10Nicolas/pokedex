import React from "react";

import { usePokemon } from "../richieste/usePokemon";
import { Link, useParams } from "react-router-dom";

import './Main.css';
import { Pokemon } from "../type/Pokemon";
import { ChangeGeneration } from "./ChangeGeneration";

export const All: React.FC = () => {
    const { gen } = useParams<{ gen: string }>();
    const list = usePokemon(parseInt(gen) - 1);

    return (
        <div>
            <ChangeGeneration gen={gen} />
            <div className="main-container" >
                {
                    list && list.map((pokemon: Pokemon) => (
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <div key={`Main:${pokemon.id}`} className="main-box" >
                                <div className="main-pokemon-sprite">
                                    <img alt={`Immagine di ${pokemon.name}`} src={pokemon.sprites.other["official-artwork"].front_default} />
                                </div>

                                <div className="main-pokemon-info">
                                    <p>{pokemon.name}</p>
                                    <p>#{pokemon.id}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}