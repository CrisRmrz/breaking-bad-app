import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//(character.char_id !== 14 && character.char_id !== 17 && character.char_id !== 39) && 
export const CharactersList = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {

        const data = await fetch('https://www.breakingbadapi.com/api/characters');
        const characters = await data.json();
        setCharacters(characters) //Este characters es lo que me trajo el .JSON, no el del useState

    }

    useEffect(() => {

        getCharacters();

    }, [])

    return (
        <>
            <p>Se encontraron {characters.length} </p>
            <div className="characters-list">
                {
                    characters.map( character => (
                        (character.char_id !== 14 && character.char_id !== 17 && character.char_id !== 39) &&
                        <Link to={`/characters/${character.char_id}`} key={character.char_id} className='card-character'>
                            <div className="container-img">
                                <img src={character.img} alt={character.name} />
                                <h1> {character.name} </h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
