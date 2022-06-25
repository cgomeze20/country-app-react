import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ContextTheme = ({children}) => {

    const [theme, setTheme] = useState(false)

    const handleTheme = ()=>{
      setTheme(!theme)
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
