import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/country/Country.js';
import CountryInfo from './component/CountryInfo/CountryInfo';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const [name, setName] = useState([])

  const handleAddCountry = (country) => {
    // console.log('country added',country);
    const newNameCount = [...name, country];
    setName(newNameCount)
  }
  return (
    <div className="App">
      <h1>country loaded :{countries.length}</h1>
      <h2>Total Country Added : {name.length}</h2>
      <CountryInfo country = {name}></CountryInfo>
        {
          countries.map(country => <Country country={country} handleAddCountry = {handleAddCountry} key = {country.alpha3Code}></Country>)
        }
    </div>
  );
}

export default App;
