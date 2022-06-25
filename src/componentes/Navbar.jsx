import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextTheme'
import '../Styles/Navbar.css'

export const Navbar = () => {

 const {theme,setTheme} = useContext(ThemeContext)

    const handleTheme = () =>{
        setTheme(!theme)
    }

  return (
    <div className={theme ? 'Navbar dark' : 'Navbar'}>
       <div className="container">
       <p>Country</p>
        <button onClick={handleTheme}>{theme ? 'Light Mode' : 'Dark Mode'}</button>
       </div>
    </div>
  )
}
