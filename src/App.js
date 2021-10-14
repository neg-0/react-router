import logo from './logo.svg';
import './App.css';

function App() {
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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// Create a simple mockup of an ecommerce site (resembling an online store). Don't worry, this is just a mockup, so it doesn't have to have images or a functioning payment system!

// Use React Router to make this a single-page-app that can change its view via the routes (tip - use a navbar along the top with buttons).

// It should feature routes to the following components:

// Home page
// Products page
// Individual product page
// View cart
// Checkout page