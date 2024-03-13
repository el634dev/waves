import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

function Results() {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    // Gives the url
    const location = useLocation();

    useEffect(() => {
        getResults('query=World%20Cup&limit=20&related_keywords=true');
    }, []);
    
    console.log(results);
    if(isLoading) return <Loading />

    // console.log(location.pathname) 

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {results?.results?.map(({ url, title }, index) => (
                        <div key={index} className='md:w-2/5 w-full'>
                            <a href={url} target='_blank' rel='noreferrer'>
                                <p className='text-sm'>
                                    {url.length > 30 ? url.substring(0, 30) : url}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/images':
            return 'SEARCH';
        case '/news':
            return 'SEARCH';
        case '/videos':
            return 'SEARCH';
        default:
            return 'ERROR';
    }
}

export default Results;
