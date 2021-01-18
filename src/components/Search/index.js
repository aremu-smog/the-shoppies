import React from 'react'
import ErrorMessage from '../utils/error-message'
import Heading from '../utils/heading'
import SearchResult from './search-result'
import Fade from 'react-reveal/Fade'

import SearchIcon from '../../images/Search.svg'

const Search = (props) => {

    const SearchMovie = (e)=> {
    
        console.log(e.target.value)
        
        // props.setSearchTerm(e.target.value)
        
        fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=748b7fee`)
        .then(res => res.json())
        .then(
          data => {
            if(data.Response === "True"){
              props.setMovies(
                data.Search.map((movie) => (
                  {...movie, nominated: props.nominations.find(item => item.imdbID === movie.imdbID) }
                )
                  
              ))
              
              props.setError(false)
              props.setErrorMessage("")
            }else{
              props.setError(true)
              props.setErrorMessage(data.Error)
            }
     
          }
        )
        
      }
    
    
    return (
        <aside className="px-10 sm:w-4/12 w-full bg-white">
        <Heading title="The Shoppies" />

        <div className="flex border-gray-400 focus-within:border-black  border-2">
          <input type="text" onKeyUp={SearchMovie} 
          className="py-2 px-4  w-full outline-none" 
          placeholder="Enter a search term e.g Ramb"
          />
          <button className="text-center hover:bg-transparent"><img src={SearchIcon}  alt="search icon" className="mx-4 w-7" /></button>
        </div>
        <section className="mt-10">

          {
          <>
          <Fade collapse when={props.error} ><ErrorMessage message={props.errorMessage}  /></Fade>
          <Fade when={!props.error} collapse  >
              <div>
          {props.movies.map(movie => <SearchResult 
              key={movie.imdbID} 
              title={movie.Title} 
              releaseDate={movie.Year} 
              nominate={()=>props.Nominate(movie)}
              nominated={movie.nominated}
              />) }
              </div>
              </Fade>
            </>
              }
          
        </section>
      </aside>
    )
}

export default Search