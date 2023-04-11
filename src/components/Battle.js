import React from 'react'

const Battle = ({pokemon,userPokemon}) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h1>{userPokemon.name}</h1>
    </div>
  )
}

export default Battle
