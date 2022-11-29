import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const EpisodeList = () => {

    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async () => {

        const data = await fetch('https://www.breakingbadapi.com/api/episodes');
        const episodes = await data.json();
        setEpisodes(episodes)

    }

    useEffect(() => {

        getEpisodes();

    }, [])

    return (
        <>
            <p>Se encontraron {episodes.length} resultados </p>

            <div className="episodes-list">
                {
                    episodes.map(episode => (
                        <Link
                            key={episode.episode_id}
                            to={`/episodes/${episode.episode_id}`}
                            className='card-episode' 
                        >

                            <div className="container-img">
                                <img src='https://www.pngall.com/wp-content/uploads/5/Breaking-Bad-PNG-File.png' alt={episode.title} />
                            </div>
                            <div className="text-episode">
                                <span> { episode.episode_id } </span>
                                <h1> {episode.title} </h1>
                            </div>
                        </ Link>
                    ))
                }
            </div>
        </>
    )
}
