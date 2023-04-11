
import { useState } from 'react';
import './App.css';
import Start from './commponents/Start';

function App() {
  const [page setPage] =useState('start')
  
  return (
    <div className="App">
      {page ==='start'? < Start /> : null }
    </div>
  );
}

export default App;
