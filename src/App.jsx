import './App.css'
import { useFetch } from './hooks/useFetch'
import Country from './componentes/Country'
import { Navbar } from './componentes/Navbar'
import { Spinner } from './componentes/Spinner'
import { useSearchParams} from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './context/ContextTheme'


function App() {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const filtro = searchParams.get('filtro') ?? ''

  const {theme} = useContext(ThemeContext)
  

  const {data, error, loading} = useFetch(`https://restcountries.com/v2/all`)

  if(loading){
    return <Spinner/>
  }

  if(error !== ""){
    return <p>{error}</p>
  }

  const handleChange = (e) =>{
    console.log(e.target.value);
    setSearchParams({filtro: e.target.value})

  }


  return (
    
    <div className={theme ? 'App dark' : 'App'}>
      <Navbar/>
      <input className={theme ? 'darkInput' : ''}
        type="search"
        placeholder='Search by country or continent'
        onChange={handleChange}
        value={filtro}
         />
    <div className="Country-container">
      {
      data.filter((country)=>{
        if(!filtro) return true
        let name = country.name.toLowerCase()
        let region = country.region.toLowerCase()
        return name.includes(filtro.toLowerCase()) || region.includes(filtro.toLowerCase())
      })
        .map(country=>(
          <Country
            key={country.name}
            flag={country.flag}
            country={country.name}
            population={country.population}
            continent={country.region}
            capital={country.capital} />
          
        ))
 
      }
      </div>
      
    </div>
    
  )
}

export default App
