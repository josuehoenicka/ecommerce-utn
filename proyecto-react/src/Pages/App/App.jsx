
import './App.css';
import Header from '../../Components/Header/Header';

import Home from '../Home';
import './App.css'

import ContextProvider from '../../Context';

function App() {

  return (
    <ContextProvider>
      <Header />
      <Home />
    </ContextProvider>
      

  )
}

export default App
