import React, { useEffect, useState, useRef } from 'react'
import sound from './PokémonThemeSong.wav'
import Caught from './Caught'
import { AiFillHeart } from 'react-icons/ai'

const Battle = ({ pokemon, userPokemon, setPage, setUsersPokemons, usersPokemons }) => {
  const [enemyHP, setEnemyHP] = useState(pokemon.stats[0].base_stat);
  const [userHP, setUserHP] = useState(userPokemon.HP);
  const [isBattleStarted, setIsBattleStarted] = useState(false);
  const [buttonMode, setButtonMode] = useState('loaded');
  const [caughtShown, setCaughtShown] = useState(false)
  const pokeSong = new Audio(sound)

  useEffect(() => {
    playSong()

    return () => {
      pauseSong()

    }
  }, []);

  useEffect(() => {
    if (isBattleStarted && enemyHP > 0 && userHP > 0) {
      setTimeout(() => {
        let myDamage = ((((2 / 5 + 2) * userPokemon.Attack * 60 / pokemon.stats[2].base_stat) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
        let enemyDamage = ((((2 / 5 + 2) * pokemon.stats[1].base_stat * 60 / userPokemon.Defense) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
        let newEnemyHp = Math.floor(enemyHP - myDamage)
        let newUserHp = Math.floor(userHP - enemyDamage)
        setEnemyHP(newEnemyHp)
        setUserHP(newUserHp)
        if (newUserHp <= 0) {
          setButtonMode('lose')
        }
        if (newEnemyHp <= 0) {
          setButtonMode('win')
        }
      }, 500);

    }
  }, [isBattleStarted, userHP, enemyHP]);

  function playSong() {
    pokeSong.play()
  }

  function pauseSong() {
    pokeSong.pause()
  }

  function handleClick() {

    setIsBattleStarted(true)
    setButtonMode('battle')
  };

  function handleCacth() {
    setUsersPokemons([...usersPokemons, pokemon])

    fetch('/api/catch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: pokemon.name,
        Type: pokemon["types"][0]["type"]["name"],
        HP: pokemon.stats[0].base_stat,
        Attack: pokemon.stats[1].base_stat,
        Defense: pokemon.stats[2].base_stat,
        ImageURL: pokemon.sprites.front_default
      })
    })
      .then(res => res.json())
      .then(data => {
        fetch("/api/pokemons")
        .then(response => response.json())
        .then(dataNew => setUsersPokemons(dataNew))
      })
      .catch(error => console.error(error));


    setCaughtShown(true)
    setButtonMode('battle')
    setTimeout(() => {
      setCaughtShown(false)
      setButtonMode('lose')
    }, 1500);
  };

  function handleBack() {
    setPage('start')

  }

  return (



    <div className='battle'>
      <h1 className='enemy'>Battle</h1>
      <div className='battleBox'>
        <div className={`pokemonCardContanier${pokemon["types"][0]["type"]["name"]}`}>
          <div className='pokemonCard'>
            <div className={`pokemonBackground`}>
              <img src={pokemon.sprites.front_default} className='pokemonImage' />
            </div>
            <div className={`pokemonContent`}>
              <h1 className='pokemonName'>{pokemon.name}</h1>
              <p className='pokemonType'>{pokemon["types"][0]["type"]["name"]}</p>
              <p className='pokemonHP'>{enemyHP} <AiFillHeart /></p>
              <p className='pokemonATK'>{pokemon.stats[1].base_stat}</p>
              <p className='pokemonDEF'>{pokemon.stats[2].base_stat}</p>
            </div>
          </div>
        </div>
        {caughtShown && <Caught />}

        <div className={`pokemonCardContanier${userPokemon.Type}`}>
          <div className='pokemonCard'>
            <div className={`pokemonBackground`}>
              <img src={userPokemon.ImageURL} className='pokemonImage' />
            </div>
            <div className={`pokemonContent`}>
              <h1 className='pokemonName'>{userPokemon.Name}</h1>
              <p className='pokemonType'>{userPokemon.Type}</p>
              <p className='pokemonHP'>{userHP} <AiFillHeart /></p>
              <p className='pokemonATK'>{userPokemon.Attack}</p>
              <p className='pokemonDEF'>{userPokemon.Defense}</p>
            </div>
          </div>
        </div>
      </div>
      {buttonMode === 'loaded' ?
        <div className='buttonBox'>
          <button onClick={() => handleClick()} className="battelButton">Battle</button>
          <button onClick={() => handleBack()} className="battelButton">Back</button>
        </div>
        : buttonMode === 'lose' ?
          <div className='buttonBox'>
            <button onClick={() => handleBack()} className="battelButton">Back</button>
          </div>
          : buttonMode === 'win' ?
            <div className='buttonBox'>
              <button onClick={() => handleCacth()} className="battelButton">Catch</button>
              <button onClick={() => handleBack()} className="battelButton">Back</button>
            </div>
            : null
      }
    </div>
  )
}

export default Battle
