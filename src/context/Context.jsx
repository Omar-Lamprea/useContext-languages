import React, { createContext, useContext, useEffect, useState } from 'react'
import EN from '../languages/english.json'
import ES from '../languages/spanish.json'
import PTBR from "../languages/portuguese.json"


export const GlobalLang = createContext()

const languages = {
  english: {
      id: "EN",
      text: EN
  },
  spanish:{
      id: "ES",
      text: ES
  },
  portuguese:{
      id: "PT",
      text: PTBR
  }
};

const Context = ({children}) => {
  const [language, setLanguage] = useState('EN')
  const [text, setText] = useState(languages.english)

  useEffect(() =>{
    if(language === "EN") setText(languages.spanish)
    if(language === "ES") setText(languages.portuguese)
    if(language === "PT") setText(languages.english)
  },[language])

  return (
    <GlobalLang.Provider value={{language, setLanguage, text, setText}}>
      {children}
    </GlobalLang.Provider>
  )
}

export default Context

export const useGlobalLang = () => useContext(GlobalLang)