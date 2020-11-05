import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSingle } from "../richieste/useSingle";

import "./Single.css";

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
                <p>{pokemon.name}</p>
                <p>{pokemon.id}</p>
                <img src={pokemon.sprites.other["official-artwork"].front_default} />
                {
                    pokemon.abilities.map((el: any) => (
                        <p>{el.ability.name}</p>
                    ))
                }

                {
                    pokemon.types.map((el: any) => (
                        <p>{el.type.name}</p>
                    ))
                }
                <p>{pokemon.weight / 10}</p>
                <p>{pokemon.height * 10}</p>
            </div>
        </div >
    )
}