import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextTheme'
import '../Styles/Country.css'

export default function Country({country, flag, population, continent, capital}) {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={theme ? 'Country dark' : 'Country'}>
        <div className='Country-flag'>
            <img src={flag} alt="" />
        </div>
        <div className={theme ? 'Country-info dark' : 'Country-info'}>
            <p><strong>Country: </strong>{country}</p>
            <p><strong>Capital: </strong>{capital}</p>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Continent: </strong>{continent}</p>
        </div>
    </div>
  )
}
