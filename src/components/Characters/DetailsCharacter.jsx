import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

export const DetailsCharacter = () => {

    const [character, setCharacter] = useState({});

    const { id } = useParams();

    const getCharacterById = async (id) => {
        const data = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
        const character = await data.json();
        setCharacter(character[0]);
    }

    useEffect(() => {
        getCharacterById(id);
    }, [])


    return (
        <>
            <div className='details-character'>
                <div className="card-img">
                    <img src={character.img} alt={character.name} />
                </div>
                <div className="card-information">
                    <h1> {character.name} </h1>
                    <h2>Información</h2>
                    <p>
                        Fecha de nacimiento: {character.birthday}
                    </p>
                    <p>
                        Apodo: {character.nickname}
                    </p>
                    <span id='occupation'>
                        Ocupación
                        <ul>
                            {character.occupation?.map( occupation => (
                                <li key={occupation}> { occupation } </li>
                            ))}
                        </ul>
                    </span>
                    <p>
                        Estado: {character.status}
                    </p>
                    <p>
                        Actor: {character.portrayed}
                    </p>
                    <p>
                        Categoria: {character.category}
                    </p>
                </div>

            </div>
        </>
    )
}
