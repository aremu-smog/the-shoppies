import React from 'react'

const SearchTerm = ({title, releaseDate, nominate, nominated=false}) => {
    return(
        <article className="flex w-full mb-4">
            
            <header className="w-9/12 px-4 py-2 border-black border border-r-0">
                <h2>{title}</h2>
                <p className="text-xs"><small>Release Date: {releaseDate}</small></p>
            </header>
            <button onClick={nominate} disabled={nominated}  className="uppercase w-3/12 border-black text-xs text-center border">
                Nominate
            </button>
        </article>
    )
}

export default SearchTerm