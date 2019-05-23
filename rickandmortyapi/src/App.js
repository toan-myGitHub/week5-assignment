import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Characters from './Characters.js';
import Home from './Home.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Characters'>Characters</Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/Characters' component={Characters} />
        </Router>
      </div>
    );
  }
}

export default App;
