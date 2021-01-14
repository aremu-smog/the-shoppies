import React from 'react'

const Nominee = ({title, year, denominate}) => {
    return(
        <article className="w-4/12 border-white border text-white justify-between">
            {console.log("Rendered")}
            <header className="border-white border-b text-cetner flex justify-between">
                <span className="block px-4 py-2 border-white border-r ">
                    Released
                </span>
                <span className="block px-4 py-2 border-white border-l">
                    {year}
                </span>
            </header>
            <h3 className="text-5xl p-4">
                {title}
            </h3>
            <footer className="border-white border-t">
                <button className="uppercase py-3 text-center w-full" onClick={denominate}>De-Nominate</button>
            </footer>
        </article>
    )
}

export default Nominee