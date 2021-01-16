import React,{useEffect, useState} from "react"
import Nominations from "../components/nominations"
import Search from "../components/Search"

import ReactHelmet from "react-helmet"


const IndexPage = () => {
  // State to hold all movies array returned from OMDB API
  const [movies, setMovies] = useState([])

  //Local state to hold nominations
  const [nominations, setNominations] = useState([])

  //Local state to hold error status
  const [error, setError] = useState(false)

  //Local state to hold error message
  const [errorMessage, setErrorMessage] = useState("")

  // variable to hold store nominations in localStorage so that users can access the nominees list after they close the app and come back to it
  const nominationsLocal = window.localStorage

  //When the component mounts
  useEffect(()=> {

    //If there is not item called nominations in the localStorage
    if(nominationsLocal.getItem("nominations") === null){

      //Create an item nominations and set it to an empty array
      nominationsLocal.setItem('nominations',JSON.stringify([]))
    }else{

      //Else if nominations exist in localStorage, update the local state to the content of nominations in the local storage
      setNominations(JSON.parse(nominationsLocal.getItem(["nominations"])))
    }

  },[nominationsLocal])
  

  // Function to nominate a movie
  const Nominate = (nominee)=> {

      //If the number of nominations is less than 5
      if(nominations.length < 5){

        //Find the movie to be nominated 
        const movie = movies.find(item => item === nominee)

        // And set it's property 'nominated' to true. Note that 'nominated' is a property that is appended to each movie object when results are being returned from the API call
        movie.nominated = true

        //Get all the existing nomations from the localStorage
        const existingNominations = JSON.parse(nominationsLocal.getItem("nominations"))
      
        //Update the localStorage by appending the nominee to existingNominations
        nominationsLocal.setItem("nominations",JSON.stringify([...existingNominations,nominee]))

        //Update local state also
        setNominations([...nominations, nominee])
      }else{

        //If items is already 5, alerty the user
        alert("That's all mate, Denominate a movie")
      }
  }


  //Function to remove a movie from the nominations list
  const Denominate = (nominee)=> {

      //Find the movie from the movies object
      const movie = movies.find(item => item === nominee)

      // If the movie is in the current of movies in from the search result
      if(movie){

        //Set it's nominated property to false
        movie.nominated = false
      }

      //Remove the movie from the nominations list in the local state
      nominations.splice(nominations.indexOf(nominee), 1)

      //Set the localStorage to the new nominations
      nominationsLocal.setItem("nominations",JSON.stringify([...nominations]))

      //Set the localstate to the new nominations
      setNominations([...nominations])

  }



  
  return(


    <div className="flex flex-wrap bg-black  min-h-screen">
      <ReactHelmet title="The Shoppies" />
      {/* The Search Component contains the Search input and search results */}
    <Search 
      error={error} 
      setError={(error)=>setError(error)}
      nominations= {nominations}
      setErrorMessage={(message)=>setErrorMessage(message)}
      errorMessage={errorMessage}
      Nominate={(nominee)=>Nominate(nominee)} 
      movies={movies} 
      setMovies={(movies)=>setMovies(movies)}
      />

      {/* Nominations component contains list of nominated movies */}
      <Nominations nominations={nominations} Denominate={(nomination)=>Denominate(nomination)} />
    </div>
    

)
}


export default IndexPage
