import React, { useEffect, useState, useRef } from 'react'
import sound from './PokémonThemeSong.wav'

const Battle = ({ pokemon, userPokemon, setPage, setUsersPokemons, usersPokemons }) => {
  const [enemyHP, setEnemyHP] = useState(pokemon.stats[0].base_stat);
  const [userHP, setUserHP] = useState(userPokemon.stats[0].base_stat);
  const [isBattleStarted, setIsBattleStarted] = useState(false);
  const [buttonMode, setButtonMode] = useState('loaded');
  const audioRef = useRef(null);

  useEffect(() => {
    playSong()

    return () => {
      pauseSong()
    }
  }, []);
  useEffect(() => {
    if (isBattleStarted && enemyHP > 0 && userHP > 0) {
      setTimeout(() => {
        let myDamage = ((((2 / 5 + 2) * userPokemon.stats[1].base_stat * 60 / pokemon.stats[2].base_stat) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
        let enemyDamage = ((((2 / 5 + 2) * pokemon.stats[1].base_stat * 60 / userPokemon.stats[2].base_stat) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
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
      }, 100);

    }
  }, [isBattleStarted, userHP, enemyHP]);

  function playSong() {
    audioRef.current = new Audio(sound);
    audioRef.current.play();
  }

  function pauseSong() {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  function handleClick() {

    setIsBattleStarted(true)
    setButtonMode('battle')
  };

  function handleCacth() {
    setUsersPokemons([...usersPokemons, pokemon])
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.textContent = 'Pokemon caught!';
    document.body.appendChild(alertBox);
    const pokebutton = document.createElement('div');
    pokebutton.classList.add('alert_button');
    alertBox.appendChild(pokebutton);
    /* setTimeout(() => {
      alertBox.remove();
    }, 4000); */
    setButtonMode('lose')
  };

  function handleBack() {
    setPage('start')

  }

  return (
    <div>
      <h1>enenmy: {pokemon.name}</h1>
      <h3>hp: {enemyHP}</h3>
      <h3>atk: {pokemon.stats[1].base_stat}</h3>
      <h3>def: {pokemon.stats[2].base_stat}</h3>
      <h1>user: {userPokemon.name}</h1>
      <h3>hp: {userHP}</h3>
      <h3>atk: {userPokemon.stats[1].base_stat}</h3>
      <h3>def: {userPokemon.stats[2].base_stat}</h3>
      {buttonMode === 'loaded' ?
        <div>
          <button onClick={() => handleClick()}>Battle</button>
          <button onClick={() => handleBack()}>Back</button>
        </div>
        : buttonMode === 'lose' ?
          <div>
            <button onClick={() => handleBack()}>Back</button>
          </div>
          : buttonMode === 'win' ?
            <div>
              <button onClick={() => handleCacth()}>Catch</button>
              <button onClick={() => handleBack()}>Back</button>
            </div>
            : null
      }
    </div>
  )
}

export default Battle
