import React, { useEffect } from 'react'
import '../App.css'
import { AiFillHeart } from 'react-icons/ai'

const Pokemon = ({ pokemon, setUserPokemon, setPage, usersPokemons,setUsersPokemons }) => {

  useEffect(() => {
    console.log(usersPokemons)
  }, [])

  function handleOnclick(i) {
    setUserPokemon(usersPokemons[i])
    setPage('battle')
  }
  function handleAZ() {
    let sortingPokemnosAZ = usersPokemons
    sortingPokemnosAZ.sort((a, b) => (a.Name > b.Name ? 1 : -1));
    console.log(sortingPokemnosAZ)
    setUsersPokemons([...sortingPokemnosAZ])
  }
  function handleZA() {
    let sortingPokemnosZA = usersPokemons
    sortingPokemnosZA.sort((a, b) => (a.Name > b.Name ? -1 : 1));
    console.log(sortingPokemnosZA)
    setUsersPokemons([...sortingPokemnosZA])
  }
  function handleStrongest() {
    let sortingPokemnosStrongest = usersPokemons
    sortingPokemnosStrongest.sort((a, b) => b.Attack - a.Attack);
    console.log(sortingPokemnosStrongest)
    setUsersPokemons([...sortingPokemnosStrongest])
  }
  function handleWeakest() {
    let sortingPokemnosWeakest = usersPokemons
    sortingPokemnosWeakest.sort((a, b) => a.Attack - b.Attack);
    console.log(sortingPokemnosWeakest)
    setUsersPokemons([...sortingPokemnosWeakest])
  }

  function handleDelete(id) {
    fetch('/api/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      fetch("/api/pokemons")
      .then(response => response.json())
      .then(dataNew => setUsersPokemons(dataNew))
    })
    .catch(error => console.error(error));
  }
  
  return (
    <div className='pokemon'>
      <h1 className='enemy'>Enemy Pokemon</h1>
      <div className='pokemonBox'>
        <div className={`pokemonCardContanier${pokemon["types"][0]["type"]["name"]}`}>
          <div className='pokemonCard'>
            <div className={`pokemonBackground`}>
              <img src={pokemon.sprites.front_default} className='pokemonImage' />
            </div>
            <div className={`pokemonContent`}>
              <h1 className='pokemonName'>{pokemon.name}</h1>
              <p className='pokemonType'>{pokemon["types"][0]["type"]["name"]}</p>
              <p className='pokemonHP'>{pokemon.stats[0].base_stat} <AiFillHeart /></p>
              <p className='pokemonATK'>{pokemon.stats[1].base_stat}</p>
              <p className='pokemonDEF'>{pokemon.stats[2].base_stat}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='userPokemon'>Chose a Pokemon to Battle</h1>
      <h2 className='SortH2'>Sort by:</h2>
      <div className='sort'>
        <button className='sort-button' onClick={() => handleAZ()}>A-Z</button>
        <button className='sort-button' onClick={() => handleZA()}>Z-A</button>
        <button className='sort-button' onClick={() => handleStrongest()}>Strongest to weakest</button>
        <button className='sort-button' onClick={() => handleWeakest()}>Weakest to strongest</button>
      </div>
      <div className='user' >{usersPokemons && usersPokemons.map((e, i) => <div className='relase-and-pokemon' key={e._id}><button className='release-btn' onClick={() =>handleDelete(e._id)}>Release</button><button onClick={() => handleOnclick(i)}  className={`smallPokemonCardContanier${e.Type}`} >
        <div className='smallPokemonCard'>
          <div className={`smallPokemonBackground`}>
            <img src={e.ImageURL} className='smallPokemonImage' />
          </div>
          <div className={`smallPokemonContent`}>
            <h1 className='smallPokemonName'>{e.Name}</h1>
            <p className='smallPokemonType'>{e.Type}</p>
            <p className='smallPokemonHP'>{e.HP} <AiFillHeart /></p>
            <p className='smallPokemonATK'>{e.Attack}</p>
            <p className='smallPokemonDEF'>{e.Defense}</p>
          </div>
        </div>
      </button>
      </div>)}
      </div>
    </div >
  )
}

export default Pokemon

