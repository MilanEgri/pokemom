import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemon,setUserPokemon,setPage,usersPokemons}) => {


  function handleOnclick (i) {
    setUserPokemon(usersPokemons[i])
    setPage('battle')
  }
  
    return (
    <div>
      <h1>{pokemon.name}</h1>
      <div >{usersPokemons && usersPokemons.map((e,i) => <button onClick={() => handleOnclick(i)} key={i}>{e.name}</button>)}</div>
    </div>
  )
}

export default Pokemon
