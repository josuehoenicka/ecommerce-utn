
import './App.css';
import Header from '../../Components/Header/Header';

import Home from '../Home';
import './App.css'

import ContextProvider from '../../Context';

import Cart from '../../Components/Cart';

function App() {

  return (
    <ContextProvider>
      <Header />
      <Home />
      <Cart />
    </ContextProvider>
      

  )
}

export default App
