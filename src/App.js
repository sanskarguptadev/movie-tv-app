import React, {Component} from 'react';
import Home from './Home/home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
