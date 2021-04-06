import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'
import Product from './components/product/Product'
import Products from './components/products/Products'
import Cart from './features/cart/Cart'
import Header from './components/header/Header'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/'>
            <Products />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
