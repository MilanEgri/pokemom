
import { useState,useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import Pokemon from './components/Pokemon';
import Battle from './components/Battle';

function App() {
  const [page, setPage] = useState('start')
  const [pokemon, setPokemon] = useState(null)
  const [userPokemon, setUserPokemon] = useState(null)
const [usersPokemons, setUsersPokemons]=useState([]);

  useEffect(() => {
    fetch("/api/pokemons")
    .then(response => response.json())
    .then(data => setUsersPokemons(data))
  },[])

  return (
    <div className="App">
      {page ==='start'? 
      < Start  setPokemon={setPokemon} pokemon={pokemon} setPage={setPage}/> 
      : page ==='pokemon'?<Pokemon  pokemon={pokemon} setUserPokemon={setUserPokemon} setPage={setPage} usersPokemons={usersPokemons} setUsersPokemons={setUsersPokemons}/>
      : <Battle pokemon={pokemon} userPokemon={userPokemon} setPage={setPage} setUsersPokemons={setUsersPokemons} usersPokemons={usersPokemons}/> }
    </div>
  );
}

export default App;
