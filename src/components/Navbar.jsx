import React, { useContext } from 'react'
import "../App.css"
import {useGlobalLang } from '../context/Context'

const Navbar = () => {

   const {language, text, setLanguage} = useGlobalLang()

   const handleLang = ()=>{
    setLanguage(text.id)
    // currentLang === "ES" 
    //     ? setLanguage(languages.english)
    //     : false
   }

   

    return (
        <div className="navbar">
            <p>{text.text.home}</p> 
            <p>{text.text.current}: {language.id}</p>
            <button onClick={handleLang} id={text.id}>{text.text.button}</button>
        </div>
    )
}

export default Navbar