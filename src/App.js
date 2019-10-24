import React, {Component} from 'react';
import './App.css';
import Default from './scenarios/Default';
import croost from "./images/crooster.jpg";
import Scenario from './Senario'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/">start over loser</Link>
          </div>
          <Switch>
            <Route  exact path="/" render={() => <div><img src={croost} /><Link to="/game-start">I know you play the game</Link></div>} />
            <Route path="/game-start">
              <Scenario />
            </Route>
          </Switch>    
        </div>
      </Router>
    );
  }  
}


export default App;
