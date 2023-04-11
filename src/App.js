
import { useState } from 'react';
import './App.css';
import Start from './components/Start';
import Pokemon from './components/Pokemon';
import Battle from './components/Battle';

function App() {
  const [page, setPage] = useState('start')
  const [pokemon, setPokemon] = useState(null)
  const [userPokemon, setUserPokemon] = useState(null)
  
  return (
    <div className="App">
      {page ==='start'? 
      < Start  setPokemon={setPokemon} pokemon={pokemon} setPage={setPage}/> 
      : page ==='pokemon'?<Pokemon  pokemon={pokemon} setUserPokemon={setUserPokemon} setPage={setPage}/>
      : <Battle pokemon={pokemon} userPokemon={userPokemon}/> }
    </div>
  );
}

export default App;
