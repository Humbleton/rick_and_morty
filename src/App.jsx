import './App.css';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
function App() {
  return (
    <div className="App">
      <h1 className='main-header'>The Rick and Morty API</h1>
      <Routes>
        <Route path='/' element={<Characters/>}/>
          <Route path=':id' element={<CharacterDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
