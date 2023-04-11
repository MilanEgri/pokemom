import React, { useEffect, useState } from 'react'

const Battle = ({pokemon,userPokemon}) => {
  const [enemyHP,setEnemyHP] =useState(pokemon.stats[0].base_stat)
  const [userHP,setUserHP] =useState(userPokemon.stats[0].base_stat)
  const [isBattleStarted,setIsBattleStarted] = useState(false)
  useEffect(() => {
    if(isBattleStarted && enemyHP>0 && userHP>0){
      
      setTimeout(() => {
        setEnemyHP(Math.floor(enemyHP- ((((2/5+2)*userPokemon.stats[1].base_stat*60/pokemon.stats[2].base_stat)/50)+2)*(Math.floor(Math.random() * 39)+217)/255))
        setUserHP(Math.floor(userHP- ((((2/5+2)*pokemon.stats[1].base_stat*60/userPokemon.stats[2].base_stat)/50)+2)*(Math.floor(Math.random() * 39)+217)/255))
      }, 1000);
      
    }
  }, [isBattleStarted,userHP,enemyHP])
  
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
      <button onClick={ () => setIsBattleStarted(true)}>Battle</button>
    </div>
  )
}

export default Battle
