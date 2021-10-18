import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useState } from 'react';
import { createContext } from 'react';
import Details from './components/Details';

export const productsList = [
  { id: 0, name: "Ride with President Camacho", price: 7000, image: "https://i.pinimg.com/564x/f8/59/51/f8595191009e50f7807bff804713bcc8.jpg" },
  { id: 1, name: "A can of Brawndo", price: 50, image: "https://i.pinimg.com/564x/05/39/5c/05395c32fb1f2d615363c6264e461300.jpg" },
  { id: 2, name: "The Costco Guy", price: 5000, image: "https://i.pinimg.com/originals/4b/90/11/4b9011fe1e912650ed6a87473fafe132.jpg" },
  { id: 3, name: "Sweet Machine Gun", price: 25, image: "https://i.pinimg.com/564x/cf/69/b6/cf69b6ee1732b797d8d34742dff3e042.jpg" },
  // { name: "Item 1", price: 7, image: "" },
  // { name: "Item 1", price: 7, image: "" },
  // { name: "Item 1", price: 7, image: "" },
  // { name: "Item 1", price: 7, image: "" },
  // { name: "Item 1", price: 7, image: "" },
  // { name: "Item 1", price: 7, image: "" }
]

export const CartContext = createContext()
export const ProductFunctionsContext = createContext()

function App() {

  const [cart, setCart] = useState([]) // Cart is an array of product Ids

  const ProductFuncs = {
    addToCart,
    removeFromCart,
    isInCart,
    getProduct
  }

  function addToCart(productId) {
    setCart((state) => {
      state = [...state, productId];
      return state
    })

  }

  function removeFromCart(productId) {
    setCart((state) => {
      let index = state.indexOf(productId);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return state
    })
  }

  function isInCart(productId) {
    return cart.includes(productId)
  }

  function getProduct(productId) {
    console.log("getProduct", productsList.find(product => product.id === productId))
    return productsList.find(product => product.id === productId)
  }

  return (
    < div className="App" >
      <CartContext.Provider value={cart}>
        <ProductFunctionsContext.Provider value={ProductFuncs}>
          <Router>
            <Nav />
            <main>
              <Switch>
                <Route path="/cart" > <Cart cart={cart} /></Route>
                <Route path="/products/:productId" component={Details} />
                <Route path="/products" component={Products} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" component={Home} />
              </Switch>
            </main>
          </Router>
        </ProductFunctionsContext.Provider>
      </CartContext.Provider>
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