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
        getResults('/search/keyword=JavaScript&size=30');
    }, []);
    
    // console.log(results);
    if(isLoading) return <Loading />

    // console.log(location.pathname) 

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {/* {results?.results?.map(({ url, title }) => (

                    ))} */}
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
