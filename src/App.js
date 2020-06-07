import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom'


import NavBar from './NavBar';
import Home from './Home'


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
          <nav className="nav-container">
            <NavBar
              onClick={this.handleNavClick} />

          </nav>

          <Switch>

            <Route path="/About">
              <div>About</div>
            </Route>
            <Route path="/Business">
              <div>Business</div>
            </Route>
            <Route path="/Schools">
              <div>Schools</div>
            </Route>
            <Route path="/Tradies">
              <div>Tradies</div>
            </Route>
            <Route path="/Promotions">
              <div>Promotions</div>
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
