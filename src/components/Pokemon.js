import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemon,setUserPokemon,setPage}) => {
    const usersPokemon = [
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/charizard",
        "https://pokeapi.co/api/v2/pokemon/poliwhirl"
    ]

    const [usersPokemons, setUsersPokemons]=useState([]);

    useEffect(() => {
        const promises = usersPokemon.map(url => fetch(url));

        Promise.all(promises)
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(pokemonData => setUsersPokemons(pokemonData))
      }, []);

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
