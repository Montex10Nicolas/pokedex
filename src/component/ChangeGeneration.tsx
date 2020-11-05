import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GENERATION_STRING = [
    "FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH"
]

export const ChangeGeneration: React.FC<{ gen: string }> = ({ gen }) => {
    const [currentGen, setCurrentGen] = useState<number>(0);
    useEffect(() => {
        setCurrentGen(() => parseInt(gen));
    }, [gen]);

    return (
        <div>
            {
                GENERATION_STRING.map((el, idx) => (
                    <Link to={`/${idx + 1}`} >
                        <button>{el}</button>
                    </Link>
                ))
            }
        </div>
    )
}