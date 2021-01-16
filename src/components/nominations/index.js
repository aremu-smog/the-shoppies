import React from 'react'
import Heading from "../utils/heading"
import Nominee from './nominee'

const Nominations = ({nominations, Denominate}) => {

    const allNominations = nominations.map((nomination) => 
    <Nominee key={nomination.imdbID} 
    title={nomination.Title} 
    year={nomination.Year} 
    id={nomination.imdbID}
    denominate={()=>Denominate(nomination)}
    />)

    return(
        <section className="px-10 sm:w-8/12 w-full">
        <Heading title="Nominations" light={true} />
        <section className="grid sm:grid-cols-3 grid-cols-1 gap-4">

        {allNominations.length > 0 && allNominations }
        </section>
      </section>
    )
}

export default Nominations