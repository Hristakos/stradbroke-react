import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import Slider from "./slider/Slider.js"
import NavBar from './NavBar';

function Product(props) {
  return <div className="product-wrapper">
    <section className="icon">
      <div className="icon-product-image-size">
        <img src={props.imageName} />
      </div>
      <div className="icon-product-name">
        <h1>{props.name}</h1>

      </div>
    </section>


  </div>
}

class App extends React.Component {

  state = {
    hideSlider: false
  }

  handleNavClick = () => {
    this.setState({ hideSlider: this.state.hideSlider ? false : true })
  }

  render() {

    const products = [
      { name: "Business", imageName: "business.png" },
      { name: "Schools", imageName: "school.png" },
      { name: "Tradies", imageName: "tradie.png" },
      { name: "Promotions", imageName: "promotions.png" }
    ]
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
              <div className="middle-section">
                <div className="products-scrollable">

                  {products.map((product, index) => (
                    <Link key={index} to={`/${product.name}`}>
                      <Product
                        name={product.name}
                        imageName={product.imageName}
                      />
                    </Link>
                  ))}

                </div>
                <div className="slider" style={this.state.hideSlider ? { display: "none" } : { display: "block" }}>
                  <Slider />
                </div>
              </div>

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
