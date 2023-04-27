
import { useState,useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import Pokemon from './components/Pokemon';
import Battle from './components/Battle';

function App() {
  const [page, setPage] = useState('start')
  const [pokemon, setPokemon] = useState(null)
  const [userPokemon, setUserPokemon] = useState(null)
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
  
  return (
    <div className="App">
      {page ==='start'? 
      < Start  setPokemon={setPokemon} pokemon={pokemon} setPage={setPage}/> 
      : page ==='pokemon'?<Pokemon  pokemon={pokemon} setUserPokemon={setUserPokemon} setPage={setPage} usersPokemons={usersPokemons}/>
      : <Battle pokemon={pokemon} userPokemon={userPokemon} setPage={setPage} setUsersPokemons={setUsersPokemons} usersPokemons={usersPokemons}/> }
    </div>
  );
}

export default App;
