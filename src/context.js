import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [term,setTerm] = useState('');
  const [debouncedTerm,setDebouncedTerm] = useState(term);
  const [loading,setLoading]= useState(true);
  const [results,setResults] = useState([]);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
        setDebouncedTerm(term);
    }, 800)
    return () => {
      clearTimeout(timeoutid);
    }
  }, [term])

  useEffect(() => {
    const termSearch = async() => {
      const results = await fetch(url + `${debouncedTerm ? debouncedTerm : 'Martini'}`);
      const data = await results.json();
      setResults(data.drinks);
      setLoading(false);
    }
    termSearch();
  }, [debouncedTerm])
  
  return(
  <AppContext.Provider value={{term,setTerm,results,loading,debouncedTerm}}>
    {children}
  </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
