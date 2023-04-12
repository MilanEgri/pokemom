import React, { useEffect, useState } from 'react'

const Battle = ({ pokemon, userPokemon, setPage, setUsersPokemons, usersPokemons }) => {
  const [enemyHP, setEnemyHP] = useState(pokemon.stats[0].base_stat);
  const [userHP, setUserHP] = useState(userPokemon.stats[0].base_stat);
  const [isBattleStarted, setIsBattleStarted] = useState(false);
  const [buttonMode, setButtonMode] = useState('loaded');

  useEffect(() => {
    if (isBattleStarted && enemyHP > 0 && userHP > 0) {
      setTimeout(() => {
        let myDamage = ((((2 / 5 + 2) * userPokemon.stats[1].base_stat * 60 / pokemon.stats[2].base_stat) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
        let enemyDamage = ((((2 / 5 + 2) * pokemon.stats[1].base_stat * 60 / userPokemon.stats[2].base_stat) / 50) + 2) * (Math.floor(Math.random() * 39) + 217) / 255
        setEnemyHP(Math.floor(enemyHP - myDamage))
        setUserHP(Math.floor(userHP - enemyDamage))
        if (Math.floor(userHP) <= Math.floor(enemyDamage)) {
          setButtonMode('lose')
        }
        if (Math.floor(enemyHP) <= Math.floor(myDamage)) {
          setButtonMode('win')
        }
      }, 100);

    }
  }, [isBattleStarted, userHP, enemyHP]);

  function handleClick() {
    setIsBattleStarted(true)
    setButtonMode('battle')
  };
  function handleCacth() {
    setUsersPokemons([...usersPokemons, pokemon])
    alert('pokemon catched')
    setButtonMode('lose')
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
          <button onClick={() => setPage('start')}>Back</button>
        </div>
        : buttonMode === 'lose' ?
          <div>
            <button onClick={() => setPage('start')}>Back</button>
          </div>
          : buttonMode === 'win' ?
            <div>
              <button onClick={() =>handleCacth()}>Catch</button>
              <button onClick={() => setPage('start')}>Back</button>
            </div>
            : null
      }
    </div>
  )
}

export default Battle
