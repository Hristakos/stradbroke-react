import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom'


import NavBar from './NavBar';
import Home from './Home'
import Products from './Products';
import About from './About';
import Order from './Order';


class App extends React.Component {

  state = {
    hideSlider: false
  }

  handleNavClick = () => {
    this.setState({ hideSlider: this.state.hideSlider ? false : true })
  }

  render() {


    return (
      < div className="App" >
        <div className="wrapper">
          <nav>
            <NavBar
              onClick={this.handleNavClick} />
          </nav>

          <Switch>

            <Route path="/About">

              <About />

            </Route>
            <Route path="/Business">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
              </div>
            </Route>
            <Route path="/Schools">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
              </div>
            </Route>
            <Route path="/Tradies">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
              </div>
            </Route>
            <Route path="/Promotions">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
              </div>
            </Route>
            <Route path="/Order">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <Order />
              </div>
            </Route>
            <Route to="/">
              <Home
                hideSlider={this.state.hideSlider}
              />
            </Route>

          </Switch>

          <footer>
            <p>76 HUME HIGHWAY SOMERTON VIC 3062 </p>
            <img src="aus-logo.png" />
          </footer>
        </div>
      </div >
    )
  };

}

export default App;
