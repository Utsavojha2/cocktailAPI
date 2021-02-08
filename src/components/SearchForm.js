import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const input = useRef(null);
  const {term,setTerm} = useGlobalContext();
  useEffect(() => {
      input.current.focus();
  }, [])

  return (
   <section className="section search">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <label htmlFor="name">Search your favorite cocktail</label>
            <input ref={input} value={term} type="text" id="name" onChange={e => setTerm(e.target.value)} />
          </div>
        </form>
   </section>
  )
}

export default SearchForm
