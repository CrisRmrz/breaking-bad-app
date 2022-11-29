import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DetailEpisode } from '../components/Episodes/DetailEpisode';
import { Navbar } from '../components/Navbar';
import { CharactersPage, EpisodesPage, DeathsPage, DetailsCharactersPage, QuotesPage } from '../Pages';

export const AppRouter = () => {
    return (
        <>

            <Navbar /> {/*Lo ponemos aqui porque de esa manera va a poder estar en todas las paginas*/}

            <Routes>

                <Route path='/' element={ <CharactersPage /> } />

                <Route path='/characters'>
                <Route index element={ <CharactersPage /> } /> {/*Con el index le decimos que representa la ruta de arriba, o sea el /characters*/}
                    <Route path=':id' element={ <DetailsCharactersPage /> } />
                </Route>

                <Route path='/episodes'>
                <Route index element={ <EpisodesPage /> } /> {/*Con el index le decimos que representa la ruta de arriba, o sea el /characters*/}
                    <Route path=':id' element={ <DetailEpisode /> } />
                </Route>

                <Route path='/deaths' element={ <DeathsPage /> } />
                <Route path='/quotes' element={ <QuotesPage /> } />
                


                <Route path='*' element={ <CharactersPage /> } />
            </Routes>
        </>
    )
}
