import { useState, useEffect } from "react";
import { AllPokemon, Result } from "../type/AllPokemon";

import { Pokemon } from "../type/Pokemon";

import generazioni from "../utility";
const POKEMON_BY_NUM = "https://pokeapi.co/api/v2/pokemon/"

export const usePokemon = (num: number) => {
    const [list, setList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const numPokemon = generazioni[num];
        const limit = `?limit=${numPokemon}`;
        let numOff = 0;
        for (let i = num - 1; i >= 0; i--) 
            numOff += generazioni[i];
        const offsett = `&&offset=${(num > 0) ? numOff : '0'}`;

        fetch(POKEMON_BY_NUM + `${limit}${offsett}`)
            .then(response => response.json())
            .then(async (data: AllPokemon) => {
                const result = data.results;
                let temp: Pokemon[] = [];
                await result.map(async (el: Result) => {
                    await fetch(el.url)
                        .then(response => response.json())
                        .then((data: Pokemon) => {
                            temp = [...temp, data];
                            temp.sort((a, b) => a.id - b.id)
                        })
                        .then(() => setList(() => temp))
                        .catch(err => {
                            console.log(err, "\nErrore")
                        })

                })
            })
    }, [num])

    return list;
}
