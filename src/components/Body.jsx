import React, { useContext } from 'react'
import { useGlobalLang } from '../context/Context'

const Body = () => {
    
    const {language, text} = useGlobalLang()
    
    return (
        <div>
            {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
            <h1>{text.text.title}</h1>
            <p>{text.text.description}</p>
        </div>
    )
}

export default Body