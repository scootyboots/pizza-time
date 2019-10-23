import React, {Component} from 'react';
import './App.css';
import Default from './scenarios/Default';
import gameStart from './scenario-data/game-start'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  state = {
    image: gameStart.image,
    events: gameStart.events,
    buttons: gameStart.buttons,
    path: gameStart.path
  }

  nextScenarioInport = (scenarioData) => {
    this.setState({
      image: scenarioData.image,
      events: scenarioData.events,
      buttons: scenarioData.buttons,
      path: gameStart.path
    })
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Route path={`/${this.state.path}`} render={( ) => <Default image={this.state.image} events={this.state.events} buttons={this.state.buttons} click={this.nextScenarioInport} />}/>
        </Router>

        {console.log('nice try loser')}

          {/* path={`/${this.state.path}`} */}

          {/* <Route path="/scenario" render={(props) => <Default {...props} image={this.state.image} events={this.state.events} buttons={this.state.buttons} click={this.nextScenarioInport} />}/> */}

        {/* <Default 
          image={this.state.image} 
          events={this.state.events} 
          buttons={this.state.buttons}
          click={this.nextScenarioInport} /> */}
  
      </div>
  
    );
  }
  
}


export default App;
