import React, {useEffect} from 'react'
import '../App.css'
import { AiFillHeart } from 'react-icons/ai'

const Pokemon = ({ pokemon, setUserPokemon, setPage, usersPokemons }) => {

  useEffect(() => {
    console.log(usersPokemons)
  },[])

  function handleOnclick(i) {
    setUserPokemon(usersPokemons[i])
    setPage('battle')
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


      <div className='user' >{usersPokemons && usersPokemons.map((e, i) => <button onClick={() => handleOnclick(i)} key={e._id} className={`smallPokemonCardContanier${e.Type}`} >
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
      </button>)}
      </div>
    </div >
  )
}

export default Pokemon

