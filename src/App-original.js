import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'ez'
  const x = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <h1>Hello From React</h1>
        <h2>Hello {name}</h2>
        <h2>Sum {1 + 1}</h2>
        <h2>Cond {x ? 'Yes' : 'No'}</h2>
      </header>
    </div>
  );
}

export default App;
