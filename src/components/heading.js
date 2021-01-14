import React from 'react'

const Heading = ({title, light=false}) => (
    <h1 className={(light && `text-white`)+` font-semibold text-4xl pt-12 pb-4`}>{title}</h1>
)

export default Heading