import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails'
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/productDetails/:productId" component={ProductDetails}/>
          <Route>404 Not Found !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
