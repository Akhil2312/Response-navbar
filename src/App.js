import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Deals from './Components/Navbar/Deals';
import Cart from './Components/Navbar/Cart';
import Land from './Components/Navbar/Land';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Body/Carousel';

function App() {
  return (
    <Router>
      <div className='App'>
          <div className='page-body'>
            <Navbar/>
            <Switch>
              <Route path='/' exact component={Land}/>
              <Route path='/deals' component={Deals}/>
              <Route path='/cart' component={Cart}/>
            </Switch>
            </div>
              <div class="carousel">
                    <Carousel/>
                    <Carousel/>
                    <Carousel/>
              </div>
          <div className='page-foot'>
                <Footer/>
          </div>
        </div>
    </Router>
  );
}




export default App;
