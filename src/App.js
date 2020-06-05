import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
      <Switch>
        <Route path="/About">
          <div>About</div>
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
      <footer>
        <p>phone</p>
      </footer>
    </div>
  );
}

export default App;
