import React from 'react'
import '../App.css'

const Pokemon = ({ pokemon, setUserPokemon, setPage, usersPokemons }) => {


  function handleOnclick(i) {
    setUserPokemon(usersPokemons[i])
    setPage('battle')
  }

  return (
    <div className='pokemonCardContanier'>
      <div className='pokemonCard'>
        <div className='pokemonBackground'>
          <img src={pokemon.sprites.front_default} className='image' />
        </div>
        <div className='pokemonContent'>
          <h1 className='pokemonName'>{pokemon.name}</h1>
          <h2 className='pokemonType'>{pokemon["types"][0]["type"]["name"]}</h2>
        </div>
        <div className='pokemonStats'>
          <h3 className='pokemonHP'>HP: {pokemon.stats[0].base_stat}</h3>
          <h3 className='pokemonATK'>ATK: {pokemon.stats[1].base_stat}</h3>
          <h3 className='pokemonDEF'>DEF: {pokemon.stats[2].base_stat}</h3>
        </div>
      </div>




      <div >{usersPokemons && usersPokemons.map((e, i) => <button onClick={() => handleOnclick(i)} key={i}>{e.name}</button>)}</div>
    </div>
  )
}

export default Pokemon

