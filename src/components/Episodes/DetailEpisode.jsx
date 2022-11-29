import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export const DetailEpisode = () => {

    const [episode, setEpisode] = useState({});

    const { id } = useParams();

    const getEpisodesById = async (id) => {
        const data = await fetch(`https://www.breakingbadapi.com/api/episodes/${id}`);
        const episode = await data.json();
        setEpisode(episode[0]);
    }

    useEffect(() => {
        getEpisodesById(id);
    }, [])

    return (
        <div className="details-episode">
            <div className="card-information-episode">
                <p>Titulo de Episodio: <span> {episode.title} </span> </p>
                <p>Numero de Episodio: <span> {episode.episode} </span> </p>
                <p>Temporada: <span> {episode.season} </span> </p>
                <p>Fecha de Estreno: <span> {episode.air_date} </span> </p>

                <span id='characters'>
                    Personajes:
                    <ul>
                        {
                            episode.characters?.map(character => (
                                <li key={character}> { character } </li>
                            ))
                        }
                    </ul>
                </span>
            </div>
        </div>
    )
}
