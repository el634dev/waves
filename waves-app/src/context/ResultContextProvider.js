import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl  = 'https://google-web-search1.p.rapidapi.com/?';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Get the results from the url
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '61089bacf3mshaf261f1de5c9792p11a42djsn4434f65001be',
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        });

        const data = await response.json();
        // console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);

