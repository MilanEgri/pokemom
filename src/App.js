
import { useState } from 'react';
import './App.css';
import Start from './components/Start';
import Pokemon from './components/Pokemon';

function App() {
  const [page, setPage] = useState('start')
  const [pokemon, setPokemon] = useState(null)
  
  return (
    <div className="App">
      {page ==='start'? 
      < Start  setPokemon={setPokemon} pokemon={pokemon} setPage={setPage}/> 
      : <Pokemon  pokemon={pokemon}/> }
    </div>
  );
}

export default App;
