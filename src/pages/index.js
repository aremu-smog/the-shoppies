import React,{useEffect, useState} from "react"
import Heading from "../components/heading"
import Layout from "../components/layout"
import Nominee from "../components/nominee"
import SearchTerm from "../components/search-term"



const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [error, setError] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  

  const Nominate = (nominee)=> {

      const movie = movies.find(item => item === nominee)
      movie.nominated = true
      setNominations([...nominations, nominee])
      console.log(movie)
   
  }
  const Denominate = (nominee)=> {

      const movie = movies.find(item => item === nominee)
      movie.nominated = false
      console.log(nominations.indexOf(nominee))
      console.log(nominations.splice(nominations.indexOf(nominee), 1))
      setNominations([...nominations])
      console.log(movie)
   
  }


  const Search = (e)=> {
    
    setSearchTerm(e.target.value)
    
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=748b7fee`)
    .then(res => res.json())
    .then(
      data => {
        if(data.Response === "True"){
          setMovies(
            data.Search.map((movie) => (
              {...movie, nominated: nominations.find(item => item.imdbID === movie.imdbID) }
            )
              
          ))
          
          setError(false)
          setErrorMessage("")
        }else{
          setError(true)
          setErrorMessage(data.Error)
        }
        console.log(data)
      }
    )
    
  }

  


  const allNominations = nominations.map((nomination) => 
    <Nominee key={nomination.imdbID} 
    title={nomination.Title} 
    year={nomination.Year} 
    id={nomination.imdbID}
    denominate={()=>Denominate(nomination)}
    />)

  
  return(

  <Layout>
    <div className="flex bg-black  min-h-screen">
      <aside className="px-10 w-4/12 bg-white">
      <Heading title="The Shoppies" />

      <input type="text" 
      onChange={Search} 
      className="py-2 px-4 border-gray-400 focus:border-black border-2 w-full outline-none" 
      placeholder="Enter a search term e.g Ramb"
      />
      <section className="mt-10">

        {error ? <p>{errorMessage}</p>: movies.map(movie => <SearchTerm 
            key={movie.imdbID} 
            title={movie.Title} 
            releaseDate={movie.Year} 
            nominate={()=>Nominate(movie)}
            nominated={movie.nominated}
             />) }
        {console.log(movies)}
      </section>
      </aside>

      <section className="px-10 w-8/12 ">
        <Heading title="Nominations" light={true} />
        <section className="flex flex-wrap">

        {allNominations.length > 0 && allNominations }
        </section>
      </section>
      
    </div>
    
  </Layout>
)
}


export default IndexPage
