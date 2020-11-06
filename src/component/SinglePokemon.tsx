import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSingle } from "../richieste/useSingle";

import "./Single.css";

const colorScheme = (type: string) => {
    switch (type) {
        case "bug": return "#A8B820"
        case "dark": return "#705848"
        case "dragon": return "#7038F8"
        case "electric": return "#F8D030"
        case "flying": return "#A890F0"
        case "fairy": return "#EE99AC"
        case "fighting": return "#C03028"
        case "fire": return "#F08030"
        case "grass": return "#78C850"
        case "ghost": return "#705898"
        case "ground": return "#E0C068"
        case "ice": return "#98D8D8"
        case "normal": return "#A8A878"
        case "poison": return "#A040A0"
        case "psychic": return "#F85888"
        case "rock": return "#B8A038"
        case "steel": return "#B8B8D0"
        case "water": return "#6890F0"
        default:
            return "white"
    }
}


export const SinglePokemon = () => {
    const { name } = useParams<{ name: string }>()
    const pokemon = useSingle(name);

    if (!pokemon) return null;

    return (
        <div className="single-container">
            <div className="single-pn">
                <Link to={`/pokemon/${pokemon.id - 1}`}><p>#{pokemon && pokemon.id - 1}</p></Link>
                <Link to={`/pokemon/${pokemon.id + 1}`}><p>#{pokemon.id + 1}</p></Link>
            </div >

            <div className="single-pokemon">
                <p style={{ gridArea: "name" }}>{pokemon.name}</p>
                <p style={{ gridArea: "index" }}>{pokemon.id}</p>
                <img style={{ gridArea: "sprite" }} src={pokemon.sprites.other["official-artwork"].front_default} />
                <div className="single-tipi">
                    {
                        pokemon.types.map((el: any) => (
                            <div className="single-type-container" style={{ backgroundColor: colorScheme(el.type.name), color: "black" }}>
                                <p>{el.type.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{ gridArea: "abilita" }}>
                    <p>Abilita</p>
                    {
                        pokemon.abilities.map((el: any) => (
                            <p>{el.ability.name}</p>
                        ))
                    }
                </div>

                <div>
                    <p>Weight: {pokemon.weight / 10}</p>
                    <p>Height: {pokemon.height * 10}</p>
                </div>
            </div>
        </div >
    )
}