import React, { useEffect, useState } from 'react'
import '../App.css'
import { MdCatchingPokemon } from 'react-icons/md'

const Start = ({setPokemon,setPage}) => {

  const [locations, setLocations] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location')
    .then(res => res.json())
    .then(data=> setLocations(data))
  }, []);

  async function getRadomPokeURLFromLocation(item) {
    const response = await fetch(`https://pokeapi.co/api/v2/location-area/${item}`);
    const json = await response.json();
    const randomPokemonURL = json.pokemon_encounters[Math.floor(Math.random() * json.pokemon_encounters.length)].pokemon.url;
    getPokeDataFromURL(randomPokemonURL)
  };

  async function getPokeDataFromURL(url) {
    const response = await fetch(url);
    const json = await response.json();
    const randomPokemon = json;
    setPokemon(randomPokemon)
    setPage('pokemon')
  };

  function onClickHandler(i) {
    getRadomPokeURLFromLocation(i + 1)
  }

  return (
    <div className='Start'>
      <h1 className='Start__ChoseLocationText'>   <span style={{ color: '#EF594F' }}><MdCatchingPokemon /></span> Chose location <span style={{ color: '#EF594F' }}><MdCatchingPokemon /></span> </h1>
    <div className='Start__Button__Conatnier'>
      {locations && locations.results.map((location, index) => (
        <button className='Start__Button' key={index} onClick={() => onClickHandler(index)}>{location.name}</button>
      ))}
    </div>
    </div>
  )
}

export default Start
