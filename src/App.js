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
import Customers from './Customers';
import ContactForm from './ContactForm';
import slide1 from "./slider/assets/slide1.jpg";
import slide2 from "./slider/assets/slide2.jpg";
import slide3 from "./slider/assets/slide3.jpg";
import slide4 from "./slider/assets/slide4.jpg";
// import slide5 from './slider/assets/slide5.jpg';
import Logo from './Logo';
import ContactDetails from './ContactDetails';
import Newsletter from './Newsletter';






const slides = [slide1, slide2, slide3, slide4];
const s = {
  container: "fullW fullH rel overflowH",
  onScreen: "left0",
  offScreenRight: "left100vw",
  offScreenLeft: "leftM100vw",
  transition: "transition1l"
};
const links = ["Business", "Schools", "Tradies", "Promotions"];
let linkCounter = 0;
let interval;
class App extends React.Component {


  state = {
    hideSlider: false,
    navDisplay: false,
    productType: "",
    slide1: {
      id: 0,
      position: s.onScreen,
      transition: true,
      link: links[linkCounter]
    },
    slide2: {
      id: 1,
      position: s.offScreenRight,
      transition: true,
      link: links[linkCounter + 1]
    },
    currentId: 0

  }

  // componentDidMount() {
  //   console.log("CDM.")
  //   this.startCarousel();
  // }

  // componentWillUnmount() {
  //   this.stopCarousel(interval);
  //   console.log(this.interval)
  // }

  startCarousel = () => {
    interval = setInterval(() => {
      this.transitionSlides();
    }, 3000);
    console.log(interval)
  };

  setSlideState = (slide1, slide2, currentId) => {
    this.setState({
      slide1: slide1,
      slide2: slide2,
      currentId: currentId
    });
  };

  transitionSlides = () => {
    const { slide1, slide2 } = this.state;
    let currentId;

    if (slide1["position"] === s.onScreen) {
      slide1["position"] = s.offScreenLeft;
      slide2["position"] = s.onScreen;

      currentId = slide2.id;
    } else {
      slide1["position"] = s.onScreen;
      slide2["position"] = s.offScreenLeft;

      currentId = slide1.id;
    }

    this.setSlideState(slide1, slide2, currentId);
    setTimeout(() => {
      this.resetSlideOffScreen();
    }, 1000);
  };

  resetSlideOffScreen = () => {
    if (linkCounter === 3) {
      linkCounter = 0;
    } else {
      linkCounter += 1;
    }
    const { slide1, slide2, currentId } = this.state;
    //const { slides } = this.props;
    if (slide1["position"] === s.offScreenLeft) {
      slide1["transition"] = false;
      slide1["position"] = s.offScreenRight;
      slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
      slide1["link"] = links[slide2.id + 1 === slides.length ? 0 : slide2.id + 1]
    } else {
      slide2["transition"] = false;
      slide2["position"] = s.offScreenRight;
      slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
      slide2["link"] = links[slide1.id + 1 === slides.length ? 0 : slide1.id + 1]
    }
    this.setSlideState(slide1, slide2, currentId);
    this.resetSlideTransitions(slide1, slide2, currentId);
  };

  resetSlideTransitions = (slide1, slide2, currentId) => {
    setTimeout(() => {
      slide1["transition"] = true;
      slide2["transition"] = true;
      this.setSlideState(slide1, slide2, currentId);
    }, 500);
  };


  handleNavClick = () => {
    this.setState({
      hideSlider: this.state.hideSlider ? false : true,
      navDisplay: !this.state.navDisplay
    })
  }
  stopCarousel = () => {
    console.log("stop ! ")
    clearInterval(interval);
  }
  handleClick = () => {
    console.log("slide clicked");
  }
  render() {


    return (

      <div className="App" >
        <div className="wrapper">

          <nav>
            <NavBar
              onClick={this.handleNavClick}
              handleLinkClick={this.stopCarousel} />
          </nav>

          <Switch>

            <Route path="/About">
              <About navDisplay={this.state.navDisplay} />

            </Route>
            <Route path="/Business">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products type="Business" />
                </div>
                <div className="product-display">
                  {productsBusiness.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                      navDisplay={this.state.navDisplay}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Schools">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products type="Schools" />
                </div>
                <div className="product-display">
                  {productsSchools.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                      navDisplay={this.state.navDisplay}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Tradies">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products type="Tradies" />
                </div>
                <div className="product-display">
                  {productsTradies.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                      navDisplay={this.state.navDisplay}
                    />
                  ))}

                </div>
              </div>
            </Route>
            <Route path="/Promotions">
              <div className="middle-section">
                <div className="products-scrollable">
                  <Products type="Promotions" />
                </div>
                <div className="product-display">
                  {productsPromotions.map(product => (
                    <ProductDisplay
                      key={product.id}
                      type={product.type}
                      name={product.name}
                      id={product.id}
                      img={product.img}
                      navDisplay={this.state.navDisplay}
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
                <OrderSuccess navDisplay={this.state.navDisplay} />
              </div>
            </Route>

            <Route path="/OrderSomethingWentWrong">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <OrderFailure navDisplay={this.state.navDisplay} />
              </div>
            </Route>
            <Route path="/Order">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <Order
                  navDisplay={this.state.navDisplay} />
              </div>
            </Route>
            <Route path="/Customers">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <Customers navDisplay={this.state.navDisplay} />
              </div>
            </Route>
            <Route path="/Newsletter">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <Newsletter />
              </div>
            </Route>

            <Route path="/Contact">

              <div className="middle-section">
                <div className="products-scrollable">
                  <Products />
                </div>
                <div className="contact-wrapper">

                  <ContactDetails />
                  <ContactForm navDisplay={this.state.navDisplay} />
                </div>
              </div>
            </Route>
            <Route to="/">
              <Home
                hideSlider={this.state.hideSlider}
                slide1={this.state.slide1}
                slide2={this.state.slide2}
                slides={slides}
                currentId={this.state.currentId}
                handleMount={this.startCarousel}
                handleUnmount={this.stopCarousel}
              />
            </Route>

          </Switch>

          <footer>
            <p>76 HUME HIGHWAY SOMERTON VIC 3062 </p>
            <img src="/aus-logo.png" />
          </footer>
        </div>
      </div >
    )
  };

}

export default App;
