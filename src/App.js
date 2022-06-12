
import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter.js';
import Navbar from './components/NavBar/Navbar.js';

import ItemListContainer from './components/itemListContainer/itemListContainer'
import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDteailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
function App() {

  return (
    <div className="App" >

      {/* <MercadoLibre /> */}
      <Navbar />

      <ItemListContainer greeting='Bienvenidos' />
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
      <ItemDteailConteiner />
    </div>
  );
}

export default App;