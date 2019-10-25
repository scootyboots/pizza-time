import React, {Component} from 'react';
import './App.css';
import Default from './scenarios/Default';
import croost from "./images/crooster.jpg";
import Scenarios from './Scenarios'
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
            <Route  exact path="/" render={() => <div><img src={croost} /><Link to="/scenarios">I know you play the game</Link></div>} />
            <Route path="/scenarios" component={Scenarios} />
          </Switch>    
        </div>
      </Router>
    );
  }  
}


export default App;
