import { useState, useEffect } from "react";
import { Pokemon } from "../type/Pokemon";

const POKEMON_BY_NUM = "https://pokeapi.co/api/v2/pokemon/";

export const useSingle = (name: string) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        fetch(POKEMON_BY_NUM + name)
            .then(response => response.json())
            .then((data: Pokemon) => {
                console.log(data);
                setPokemon(() => data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [name])

    return pokemon;
}