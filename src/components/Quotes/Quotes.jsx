import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Quotes = () => {

    const [quote, setQuote] = useState({});

    const { id } = useParams();

    const getQuoteRandom = async () => {
        const data = await fetch(`https://www.breakingbadapi.com/api/quote/random`);
        const quote = await data.json();
        setQuote(quote[0]);
    }

    useEffect(() => {
        getQuoteRandom();
    }, [])

    return (
        <div className="card-quote">
            <div className="quote">
                <blockquote>
                    <p className='quote-text'> {quote.quote} </p>
                </blockquote>
                <p className='author'> {quote.author} </p>
            </div>

            <button onClick={ () => getQuoteRandom() } >Siguiente frase</button>
        </div>
    )
}
