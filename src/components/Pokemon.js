import React from 'react'
import '../App.css'
import {AiFillHeart} from 'react-icons/ai'

const Pokemon = ({ pokemon, setUserPokemon, setPage, usersPokemons }) => {


  function handleOnclick(i) {
    setUserPokemon(usersPokemons[i])
    setPage('battle')
  }

  return (
    <div className={`pokemonCardContanier${pokemon["types"][0]["type"]["name"]}`}>
      <div className='pokemonCard'>
        <div className={`pokemonBackground`}>
          <img src={pokemon.sprites.front_default} className='pokemonImage' />
        </div>
        <div className={`pokemonContent`}>
          <h1 className='pokemonName'>{pokemon.name}</h1>
          <p className='pokemonType'>{pokemon["types"][0]["type"]["name"]}</p>
          <p className='pokemonHP'>{pokemon.stats[0].base_stat} <AiFillHeart/></p>
          <p className='pokemonATK'>{pokemon.stats[1].base_stat}</p>
          <p className='pokemonDEF'>{pokemon.stats[2].base_stat}</p>
        </div>
      </div>




      <div className='user' >{usersPokemons && usersPokemons.map((e, i) => <button onClick={() => handleOnclick(i)} key={i}>{e.name}</button>)}</div>
    </div>
  )
}

export default Pokemon

