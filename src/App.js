import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function Product(props) {
  return <div className="product-wrapper">
    <section className="icon">
      <img src={props.imageName} />
      <h1>{props.name}</h1>
    </section>


  </div>
}

class App extends React.Component {

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
            <div>
              <img className="logo" src="stradbroke-printing-logo.svg"></img>

            </div>
            <div className="nav-links">
              <a href="tel:0393053111">&#9742; 03 9305 3111</a>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Business">Business</Link>
              <Link to="/Schools">Schools</Link>
              <Link to="/Tradies">Tradies</Link>
              <Link to="/Promotions">Promotions</Link>
            </div>
          </nav>
          <div>


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
                <section className="products-scrollable">
                  {products.map((product, index) => (
                    <Link key={index} to={`/${product.name}`}>
                      <Product
                        name={product.name}
                        imageName={product.imageName}
                      />
                    </Link>
                  ))}

                </section>

              </Route>

            </Switch>
          </div>
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
