import './App.css';
import React from 'react';
import Home from './screens/home';
import Category from './screens/category';
import Product from './screens/product';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Header from './components/header/header';
import Cart from './components/cart/cart_window';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false
    }
  }
  render() {
    return (
        <BrowserRouter>
          <Cart />
          <div id='shadow'></div>
          <div className='App'>
          <Header />
            <Switch>
                <Route exact path='/' render={props => <Home {...props} />} />
                <Route exact path='/category/:categoryName' render={props => <Category {...props} />} />
                <Route exact path='/product/:productID' render={props => <Product {...props} />} />
                {
                  this.state.authed ? (
                    <Route exact path='/profile' render={props => <Home {...props} />} />
                  ) : (
                    null
                  )
                }
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;