
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter.js';
import Button from './components/Button/Button.js';

function App(){
  const valor = 1234


  const increment =()=>{
    console.log('sumar');
  }
  return (
    <div className="App" >
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
    <Counter initial={10} tittle='Contador' handleIncrement={increment}/>
    </div>

  );
}

export default App;