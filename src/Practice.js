import React, { useState, useEffect } from 'react';
import Search from './components/Search' 
import Table from './components/Table'


const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';


const App = () => {
    const [ searchTerm, setSearchTerm ] = useState(DEFAULT_QUERY)
    const [ result, setResult ] = useState({ hits: [] })

    const setSearchTopStories = result => {
        setResult(result)
    }

   async function fetchSearchTopStories () {
       const data = await fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`);
        data 
        .json()
        .then(data => this.setSearchTopStories(data))
        .catch(error => error);

        setSearchTopStories(data)
    }

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const onSearchSubmit = event => {
        event.preventDefault();
        fetchSearchTopStories(searchTerm)
    }

    // const onDismiss = id => {
    //     const updatedHits = result.hits.filter(item => item.objectID !== id);
    //     setResult({...result, hits: updatedHits})
    // }


    useEffect(() => {
        fetchSearchTopStories();
    });

     

    if(!result) {return null; }
    return (
        <div className="page">
            <div className="interactions">
                <Search 
                value={searchTerm}
                onChange={onSearchChange}
                onSubmit={onSearchSubmit}
                >
                    Search
                </Search>
            </div>

            {result && 
             <Table 
             list={result}
             />
            }
        </div>
    )
}


export default App;