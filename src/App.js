
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter.js';
import Navbar from './components/NavBar/Navbar.js';
import ItemListContainer from './components/itemListContainer/itemListContainer'
function App(){
  

  return (
    <div className="App" >
      

 
      <Navbar/>

      <ItemListContainer greeting='Bienvenidos'/>
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

    </div>
  );
}

export default App;