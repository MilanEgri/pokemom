import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemon}) => {
    const usersPokemon = [
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/charizard",
        "https://pokeapi.co/api/v2/pokemon/poliwhirl"
    ]
    const [usersPokemons, setUsersPokemons]=useState([])
    useEffect(() => {
        const promises = usersPokemon.map(url => fetch(url));

        Promise.all(promises)
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(pokemonData => setUsersPokemons(pokemonData))
      }, [])
  
    return (
    <div>
      <h1>{pokemon.name}</h1>
      <h3>{usersPokemons && usersPokemons.map((e,i) => <div key={i}>{e.name}</div>)}</h3>
    </div>
  )
}

export default Pokemon
