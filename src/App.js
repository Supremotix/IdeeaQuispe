
import React, { useState 
} from 'react'

import logo from './logo.svg';
import './App.css';
//import Counter from './components/Counter/Counter.js';
import Navbar from './components/NavBar/Navbar.js';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDteailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  // const [page, setPage] = useState('list')
  return (
    <div className="App" >



      {/* <MercadoLibre /> */}
      {/* <Navbar />

      <div>
        <button onClick={() => setPage('list')} className='a'>List</button>
        <button onClick={() => setPage('detail')} className='a'>Detail</button>
      </div>

      {page === 'list' && <ItemListContainer greeting='Bienvenidos' />}

      {page === 'detail' && <ItemListContainer greeting='Bienvenidos' />}*/}
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{color: 'red' }}>Comision </h1>
        <p style={{backgroundColor: 'green'}}>
          Hola Coders
        </p>

        <button onClick={() => console.log('nice click') }> Mostrasr un mensaje en consola</button>

      </header>*/}
      {/* <Counter initial={10} stock={15} title='Contador'  />*/}
      {/*{React.createElement(Counter,{initial:25, title: 'Contenedor 2'})}*/}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Hola Coders' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDteailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;