import {useEffect,createContext,useState} from 'react';
import {fetchDataFromApi} from '../utils/api';

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState();
    const [searchResult, setSearchResult] = useState();
    // const [loading, setLoading] = useState();
    // const [loading, setLoading] = useState();

    useEffect(() => {
        fetch
    
      return () => {
        second
      }
    }, [third])

    return(
        <Context.Provider value={
            {loading,
            setLoading,
            searchResult,
            setSearchResult
        }}>

        </Context.Provider>
    )
    
}