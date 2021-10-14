import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    < div className="App" >
      <Nav />
      <main>

        <Router>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </main>
    </div >

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