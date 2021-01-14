import React from 'react'

const Nominee = ({title, year, denominate}) => {
    return(
        <article className=" border-white border text-white ">
            {console.log("Rendered")}
            <header className="border-white border-b text-cetner flex justify-between">
                <span className="block px-4 py-2 border-white border-r ">
                    Released
                </span>
                <span className="block px-4 py-2 border-white border-l">
                    {year}
                </span>
            </header>
            <h3 className="text-5xl px-4 py-8">
                {title}
            </h3>
            <footer className="border-white border-t">
                <button className="hover:bg-gray-800 uppercase py-3 text-center w-full" onClick={denominate}>De-Nominate</button>
            </footer>
        </article>
    )
}

export default Nominee