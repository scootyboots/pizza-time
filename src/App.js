import React, {Component} from 'react';
import './App.css';
import Default from './scenarios/Default';
import croost from "./images/crooster.jpg";
import Scenarios from './Scenarios';
import Home from './Home'
import allScenarios from './scenario-data/index'
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
           <Route exact path="/" component={Home} />
           <Route exact path="/game" component={Scenarios} />
           <Route exact path={`/game/:scenarioId`} component={Default} />
           <Route path="*" component={() => <div>path does not exist</div>} />
         </Switch>
       </div>
     </Router>
   );
 }  
}


export default App;
