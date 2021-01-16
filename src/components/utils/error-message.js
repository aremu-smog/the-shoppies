import React from 'react'

const ErrorMessage = ({message}) => (

    <div className="border-black border w-full p-8 text-center text-2xl">

        {/* Sad face emoji */}
        <svg width="50" height="50" className="mx-auto mb-2" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M85 30V17H78V12H73V6H61V0H29V6H17V12H12V17H5V30H0V60H5V73H12V78H17V84H29V90H61V84H73V78H78V73H85V60H90V30H85ZM87 57H82V70H75V75H70V81H58V87H32V81H20V75H15V70H8V57H3V33H8V20H15V15H20V9H32V3H58V9H70V15H75V20H82V33H87V57Z" fill="black"/>
        <path d="M71 42H65V48H71V42Z" fill="black"/>
        <path d="M59 42H53V48H59V42Z" fill="black"/>
        <path d="M65 48H59V54H65V48Z" fill="black"/>
        <path d="M37 42H31V48H37V42Z" fill="black"/>
        <path d="M25 42H19V48H25V42Z" fill="black"/>
        <path d="M31 48H25V54H31V48Z" fill="black"/>
        <path d="M36 66H30V72H36V66Z" fill="black"/>
        <path d="M60 66H54V72H60V66Z" fill="black"/>
        <path d="M54 60H36V66H54V60Z" fill="black"/>
        </svg>

        {/* Error Message */}
        {message}
    </div>
)

export default ErrorMessage
