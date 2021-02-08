import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {results,loading} = useGlobalContext();
  if(!results){
    return(
    <section className="section">
      <h2 className="section-title">
        Oops! No cocktails found.
      </h2>
    </section>
    )
  }
  return (
    <section className="section">
        <h2 className="section-title">Cocktails</h2>
        {loading ? <Loading /> : 
          <div className="cocktails-center">
            {results.map(el => {
              return <Cocktail key={el.idDrink} {...el} />
            })}
          </div>
        }
    </section>
  )
}

export default CocktailList
