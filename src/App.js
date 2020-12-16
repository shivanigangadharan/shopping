import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Cart from './pages/cart';
import Login from './pages/login';
import Homepage from './pages/homepage';
import Products from './pages/products';
import Navbar from './components/navbar';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/products' component={Products} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
