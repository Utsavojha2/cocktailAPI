import React, {useState, useEffect} from 'react'
import Error from '../pages/Error';
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [buffering,setBuffering] = useState(true);
  const [error,setError] = useState(false);
  const [results,setResults] = useState([]);


  useEffect(() => {
    const cocktailbyid = async() => {
      try{
      const data = await fetch(url + id);
      const resp = await data.json();
      if(!resp.drinks){
        setResults([]);
      }
      setResults(resp.drinks[0]); 
      setBuffering(false);
      setError(false);
      } catch(error){
        setError(true);
      }
    }
    cocktailbyid();
  }, [id])

  if(buffering){
    return <Loading />
  }

  return error || !results ? <Error /> : (
   <section className="section cocktail-section">
     <h2 className="section-title">{results.strDrink}</h2>
     <div className="drink">
       <img src={results.strDrinkThumb} alt={results.strDrink} />
     <div className="drink-info">
       <p><span className="drink-data">Name :</span>{results.strDrink}</p>
       <p><span className="drink-data">Category :</span>{results.strCategory}</p>
       <p><span className="drink-data">Info :</span>{results.strAlcoholic}</p>
       <p><span className="drink-data">Glass :</span>{results.strGlass}</p>
       <p><span className="drink-data">Instructions :</span>{results.strInstructions}</p>
     </div>
    </div>
    <Link to="/" className="btn btn-primary" style={{marginTop : '22px'}}>Home</Link>
   </section>
  )
}

export default SingleCocktail;
