import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'


import NavBar from './NavBar';
import Home from './Home'
import Products from './Products';
import About from './About';
import Order from './Order';
import ProductDisplay from './ProductDisplay';
import productsBusiness from './lib/productsBusiness';
import productsSchools from './lib/productsSchools';
import productsTradies from './lib/productsTradies';
import productsPromotions from './lib/productsPromotions';
import OrderSuccess from './OrderSuccess';
import OrderFailure from './OrderFailure';

class App extends React.Component {

  state = {
    hideSlider: false,
    productType: ""
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
                <div className="product-display">
                  {productsBusiness.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Schools">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <div className="product-display">
                  {productsSchools.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Tradies">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <div className="product-display">
                  {productsTradies.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Promotions">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <div className="product-display">
                  {productsPromotions.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/OrderSuccess">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <OrderSuccess />
              </div>
            </Route>

            <Route path="/OrderSomethingWentWrong">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <OrderFailure />
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
